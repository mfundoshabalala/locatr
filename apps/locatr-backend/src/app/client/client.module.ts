import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Client } from './entities/client.entity';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
