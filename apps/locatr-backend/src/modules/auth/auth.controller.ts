import { Controller, Post, Body, HttpCode, HttpStatus, Get, Query, Res } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { Public } from './strategy/public-strategy';
// import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: User) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() signUpDto: CreateUserDto) {
    const payload: CreateUserDto = {
      username: signUpDto.username,
      password: signUpDto.password,
      verified: signUpDto.verified,
      roleID: signUpDto.roleID,
      employee: signUpDto.employee,
      role: null,
    };
    return this.authService.signUp(payload);
  }

  @Get('confirm')
  async confirmEmail(@Query('token') token: string, @Res() res) {
    const username = await this.authService.verifyEmail(token);
    // return res.redirect('/email-confirmed'); // Redirect to a confirmation page
    // return res.send({ username });
    return { message: `Email verified for user ${username}` };
  }

  @Get('reset-password')
  async resetPassword(@Query('token') token: string, @Res() res) {
    // Implement the logic to show reset password page
    // return res.render('reset-password', { token });
    const username = await this.authService.verifyEmail(token);
    return { message: `Password reset link verified for user ${username}` };
  }

  // @UseGuards(AuthGuard)
  // @Get('profile')
  // getProfile(@Request() request) {
  //   return request.user;
  // }

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
