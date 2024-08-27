import { ClientController } from './client.controller';
import { ClientEntity } from './entities/client.entity';
import { ClientService } from './client.service';
import { ContactEntity } from '../contact/entities/contact.entity';
import { Industry } from '../industry/entities/industry.entity';
import { Module } from '@nestjs/common';
import { SiteEntity } from '../site/entities/site.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity, Industry, ContactEntity, SiteEntity])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
