import { ClientEntity } from '../client/entities/client.entity';
import { ContactEntity } from './entities/contact.entity';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity, ClientEntity])],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService]
})
export class ContactModule {}
