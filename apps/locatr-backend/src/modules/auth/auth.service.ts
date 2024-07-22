import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { RoleService } from '../role/role.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly roleService: RoleService
  ) {}

  private async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneBy(username);
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
      if (payload.roleID) {
        const role = await this.roleService.findOne(payload.roleID);
        if (!role) {
          throw new Error('Role not found');
        }
        user = await this.userService.create({ ...payload, role });
      } else {
        user = await this.userService.create(payload);
      }
    } catch (error) {
      throw new Error(error);
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

  async verifyEmail(token: string): Promise<string> {
    const payload = await this.jwtService.verifyAsync(token);
    return payload.username;
  }

  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
