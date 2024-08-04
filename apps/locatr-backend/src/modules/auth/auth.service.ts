import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '@migrations/user/user.service';
import { CreateUserDto } from '@migrations/user/dto/create-user.dto';
import { User } from '@migrations/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService
  ) {}

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  private async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  async signIn(username: string, password: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOneBy(username);
    if (!user || !user.password) {
      throw new UnauthorizedException("User doesn't exist");
    }

    if (!await this.comparePasswords(password, user.password)) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(payload: CreateUserDto): Promise<User> {
    let user: User;
    console.log(payload);
    try {
      payload = { ...payload, password: await this.hashPassword(payload.password) };
      return await this.userService.create(payload);
    } catch (error) {
      throw new UnauthorizedException((error as Error).message);
    }
    return user;
  }

  async forgotPassword(username: string): Promise<string> {
    const user = await this.userService.findOneBy(username);
    if (!user) {
      throw new UnauthorizedException();
    }

    return 'Password reset link sent to your email';
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
