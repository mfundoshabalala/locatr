import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { Contact } from '../contact/entities/contact.entity';
import { Industry } from '../industry/entities/industry.entity';
import { Site } from '../site/entities/site.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Client, Industry, Contact, Site])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
