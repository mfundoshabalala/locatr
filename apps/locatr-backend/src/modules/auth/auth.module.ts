import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { jwtConstants } from './constants';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
// import { AuthGuard } from './guard/auth/auth.guard';
import { JwtStrategy } from './strategy/jwt-strategy';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { RoleService } from '../role/role.service';
import { Role } from '../role/entities/role.entity';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([User, Role]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    UserService,
    RoleService
  ],
  exports: [AuthService],
})
export class AuthModule {}
