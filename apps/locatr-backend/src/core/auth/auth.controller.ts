import { Controller, Post, Body, HttpCode, HttpStatus, Get, UseGuards, Request } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserEntity } from '../user/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from './guards/auth.guard';

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

  @UseGuards(AuthGuard)
  @Get('me')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getProfile(@Request() request: any) {
    return request.user;
  }
}
