import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserEntity } from '../user/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { PassportLocalGuard } from './guards/passport-local.guard';
import { PassportJwtAuthGuard } from './guards/passport-jwt.guard';

@ApiTags('authentication')
@Controller('auth-v2')
export class PassportAuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  signIn(@Request() request: any) {
    return this.authService.signIn(request.user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('forgot-password')
  forgotPassword(@Body() forgotPasswordDto: UserEntity) {
    return this.authService.forgotPassword(forgotPasswordDto.username);
  }

  @Get('me')
  @UseGuards(PassportJwtAuthGuard)
  getProfile(@Request() request: any) {
    return request.user;
  }
}
