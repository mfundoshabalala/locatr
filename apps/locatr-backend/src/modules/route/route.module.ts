import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RouteService } from './route.service';
import { Route } from './entities/route.entity';
import { RouteController } from './route.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Route])],
  controllers: [RouteController],
  providers: [RouteService],
})
export class RouteModule {}
