import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ClientsModule } from './client/clients.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
