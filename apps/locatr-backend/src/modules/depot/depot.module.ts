import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepotService } from './depot.service';
import { Depot } from './entities/depot.entity';
import { DepotController } from './depot.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Depot])],
  controllers: [DepotController],
  providers: [DepotService],
})
export class DepotModule {}
