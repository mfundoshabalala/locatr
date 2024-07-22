import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { APP_GUARD } from '@nestjs/core';

import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { JwtStrategy } from './strategy/jwt-strategy';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { RoleService } from '../role/role.service';
import { Role } from '../role/entities/role.entity';
import { MailService } from '../mailer/mail.service';
// import { AuthGuard } from './guard/auth/auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([User, Role]),
  ],
  controllers: [AuthController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    AuthService,
    JwtStrategy,
    UserService,
    RoleService,
    MailService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
