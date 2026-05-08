import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportAuthController } from './passport-auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt-strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { UserModule } from '../user/user.module';
import { MailModule } from '../mail/mail.module';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy, GoogleStrategy, FacebookStrategy],
  controllers: [AuthController, PassportAuthController],
  imports: [
    UserModule,
    MailModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule
  ],
})
export class AuthModule {}
