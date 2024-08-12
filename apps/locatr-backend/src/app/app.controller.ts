import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';
import { RolesGuard } from '../modules/auth/guard/role/roles.guard';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/debug-sentry")
  getError() {
    throw new Error("My first Sentry error!");
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  getApp(): string {
    return 'Protected Route Accessed Successfully!';
  }
}


