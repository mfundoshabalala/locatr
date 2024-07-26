import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';
import { RolesGuard } from '../modules/auth/guard/role/roles.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  // @Roles('admin')
  getApp(): string {
    return 'Protected Route Accessed Successfully!';
  }
}


