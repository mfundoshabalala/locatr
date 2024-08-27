import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteEntity } from './entities/route.entity';
import { RouteService } from './route.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RouteEntity])],
  controllers: [RouteController],
  providers: [RouteService],
})
export class RouteModule {}
