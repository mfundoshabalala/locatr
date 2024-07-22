import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { RoleService } from '../role/role.service';
import { MailService } from '../mailer/mail.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService,
    private readonly mailService: MailService
  ) {}

  private async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.validateUser(username, pass);
    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(payload: CreateUserDto): Promise<User> {
    let user: User;
    try {
      if (user.employee.email) {
        if (payload.roleID) {
          const role = await this.roleService.findOne(payload.roleID);
          if (!role) {
            throw new Error('Role not found');
          }
          user = await this.userService.create({ ...payload, role });
        } else {
          user = await this.userService.create(payload);
        }
        // Generate verification token
        const token = await this.jwtService.signAsync({ username: user.username });
        // Send email
        await this.mailService.sendUserConfirmation(user?.employee.email, token);
      }
    } catch (error) {
      throw new Error(error);
    }
    return user;
  }

  async forgotPassword(username: string): Promise<string> {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException();
    }

    // Generate password reset token
    const token = await this.jwtService.signAsync({ username: user.username });

    // Send password reset email
    if (!user.employee.email) {
      await this.mailService.sendPasswordReset(user?.employee.email, token);
    }

    return 'Password reset link sent to your email';
  }

  async verifyEmail(token: string): Promise<string> {
    const payload = await this.jwtService.verifyAsync(token);
    const user = await this.userService.findOneByUsername(payload.username);
    user.verified = true;
    await this.userService.update(user.id, user);
    return payload.username;
  }
}
