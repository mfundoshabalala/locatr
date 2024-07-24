import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOneBy(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload, { secret: process.env.JWT_SECRET }),
    };
  }

  async signUp(payload: CreateUserDto): Promise<User> {
    try {
      return await this.userService.create(payload);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async forgotPassword(username: string): Promise<string> {
    const user = await this.userService.findOneBy(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return 'Password reset link sent to your email';
  }

  async verifyEmail(token: string): Promise<string> {
    const payload = await this.jwtService.verifyAsync(token, { secret: process.env.JWT_SECRET });
    return payload.username;
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
