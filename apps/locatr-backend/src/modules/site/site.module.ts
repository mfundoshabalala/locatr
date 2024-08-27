import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { SiteEntity } from './entities/site.entity';
import { ClientEntity } from '../client/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SiteEntity, ClientEntity])],
  controllers: [SiteController],
  providers: [SiteService],
  exports: [SiteService],
})
export class SiteModule {}
