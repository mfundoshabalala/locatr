import * as bcrypt from 'bcrypt';

import { User } from '@sentry/nestjs';
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { MailService } from '../mail/mail.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: string; username: string };
type AuthResult = { accessToken: string; userId: string; username: string };

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly mailService: MailService
  ) {}

  async authenticate({ username, password }: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser({ username, password });
    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }

  async validateUser({ username, password }: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findOneByName(username);

    if (user && await this.comparePasswords(password, user.password)) {
      return { userId: user.id, username: user.username };
    }

    return null;
  }

  private async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const payload = { sub: user.userId, username: user.username };
    const accessToken = await this.jwtService.signAsync(payload);
    return {
      accessToken,
      userId: user.userId,
      username: user.username,
    };
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async signUp(payload: CreateUserDto): Promise<User> {
    try {
      payload = { ...payload, password: await this.hashPassword(payload.password) };
      const user = await this.userService.create(payload);

      // Generate and send verification email
      const verificationToken = await this.userService.setVerificationToken(user.id);
      await this.mailService.sendVerificationEmail(user.email, user.username, verificationToken);

      return user;
    } catch (error) {
      throw new UnauthorizedException((error as Error).message);
    }
  }

  async forgotPassword(username: string): Promise<string> {
    const user = await this.userService.findOneByName(username);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const resetToken = await this.userService.setPasswordResetToken(user.id);
    await this.mailService.sendPasswordResetEmail(user.email, user.username, resetToken);

    return 'Password reset link sent to your email';
  }

  async resetPassword(username: string, token: string, newPassword: string): Promise<string> {
    const user = await this.userService.findOneByName(username);

    if (!user) {
      throw new UnauthorizedException('Invalid token or username');
    }

    if (user.passwordResetToken !== token) {
      throw new UnauthorizedException('Invalid token or username');
    }

    if (!user.passwordResetTokenExpiry || user.passwordResetTokenExpiry < new Date()) {
      throw new BadRequestException('Token has expired');
    }

    const hashedPassword = await this.hashPassword(newPassword);
    await this.userService.updatePassword(user.id, hashedPassword);

    return 'Password has been reset successfully';
  }

  async verifyEmail(username: string, token: string): Promise<string> {
    const user = await this.userService.findOneByName(username);

    if (!user) {
      throw new UnauthorizedException('Invalid token or username');
    }

    if (user.verificationToken !== token) {
      throw new UnauthorizedException('Invalid token or username');
    }

    if (!user.verificationTokenExpiry || user.verificationTokenExpiry < new Date()) {
      throw new BadRequestException('Token has expired');
    }

    await this.userService.verifyEmail(user.id);

    return 'Email verified successfully';
  }

  async validateOAuthUser(email: string, firstName: string, lastName: string): Promise<AuthResult> {
    let user = await this.userService.findByEmail(email);

    if (!user) {
      // Create a new user for OAuth login
      const createUserDto: any = {
        email,
        username: email.split('@')[0], // Use email prefix as username
        password: await this.hashPassword(Math.random().toString(36)), // Random password for OAuth users
        employee: {
          firstName,
          lastName,
        },
        contact: {
          email,
        },
      };

      user = await this.userService.create(createUserDto);
      // OAuth users are automatically verified
      await this.userService.verifyEmail(user.id);
    }

    return this.signIn({ userId: user.id, username: user.username });
  }
}
