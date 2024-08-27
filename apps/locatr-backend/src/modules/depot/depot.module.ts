import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepotService } from './depot.service';
import { DepotEntity } from './entities/depot.entity';
import { DepotController } from './depot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DepotEntity])],
  controllers: [DepotController],
  providers: [DepotService],
})
export class DepotModule {}
