import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AppService {
  @UseGuards(AuthGuard('jwt'))
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
