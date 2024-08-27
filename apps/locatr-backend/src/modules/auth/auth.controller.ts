import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserEntity } from '../user/entities/user.entity';
import { Public } from './strategy/public-strategy';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: UserEntity) {
    return this.  authService.signIn(signInDto.username, signInDto.password);
  }

  @Public()
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
}
