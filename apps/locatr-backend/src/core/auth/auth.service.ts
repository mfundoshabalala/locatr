import * as bcrypt from 'bcrypt';

import { User } from '@sentry/nestjs';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: string; username: string };
type AuthResult = { accessToken: string; userId: string; username: string };

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, 
    private readonly userService: UserService
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
      return await this.userService.create(payload);
    } catch (error) {
      throw new UnauthorizedException((error as Error).message);
    }
  }

  async forgotPassword(username: string): Promise<string> {
    const user = await this.userService.findOneByName(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return 'Password reset link sent to your email';
  }
}
