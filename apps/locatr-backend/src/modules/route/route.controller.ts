import { DeleteResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { RouteEntity } from './entities/route.entity';
import { CurrentUserInterceptor } from 'src/middleware';

@ApiTags('route')
@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createRouteDto: CreateRouteDto): Promise<RouteEntity> {
    return this.routeService.create(createRouteDto);
  }

  @Get()
  findAll(): Promise<RouteEntity[]> {
    return this.routeService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<RouteEntity | null> {
    return this.routeService.findOne(+id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routeService.update(+id, updateRouteDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.routeService.remove(+id);
  }
}
