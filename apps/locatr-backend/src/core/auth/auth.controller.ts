import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards, Request, Res } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserEntity } from '../user/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './guards/auth.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { FacebookAuthGuard } from './guards/facebook-auth.guard';

@ApiTags('authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: { username: string; password: string }) {
    return this.authService.authenticate(signInDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() signUpDto: CreateUserDto) {
    const payload: CreateUserDto = {
      username: signUpDto.username,
      password: signUpDto.password,
      email: signUpDto.email,
      employee: signUpDto.employee,
      contact: signUpDto.contact,
      role: signUpDto.role,
    };
    return this.authService.signUp(payload);
  }

  @HttpCode(HttpStatus.OK)
  @Post('forgot-password')
  forgotPassword(@Body() forgotPasswordDto: UserEntity) {
    return this.authService.forgotPassword(forgotPasswordDto.username);
  }

  @HttpCode(HttpStatus.OK)
  @Post('reset-password')
  resetPassword(@Body() resetPasswordDto: { username: string; token: string; password: string }) {
    return this.authService.resetPassword(
      resetPasswordDto.username,
      resetPasswordDto.token,
      resetPasswordDto.password
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify-email')
  verifyEmail(@Body() verifyEmailDto: { username: string; token: string }) {
    return this.authService.verifyEmail(verifyEmailDto.username, verifyEmailDto.token);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getProfile(@Request() request: any) {
    return request.user;
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async googleAuth(@Request() req: any) {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req: any, @Res() res: Response) {
    const authResult = await this.authService.validateOAuthUser(
      req.user.email,
      req.user.firstName,
      req.user.lastName
    );
    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${authResult.accessToken}`);
  }

  @Get('facebook')
  @UseGuards(FacebookAuthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async facebookAuth(@Request() req: any) {}

  @Get('facebook/callback')
  @UseGuards(FacebookAuthGuard)
  async facebookAuthRedirect(@Request() req: any, @Res() res: Response) {
    const authResult = await this.authService.validateOAuthUser(
      req.user.email,
      req.user.firstName,
      req.user.lastName
    );
    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${authResult.accessToken}`);
  }
}
