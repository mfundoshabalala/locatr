import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routeService.create(createRouteDto);
  }

  @Get()
  findAll(): Promise<Route[]> {
    return this.routeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Route | null> {
    return this.routeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto): Promise<UpdateResult> {
    return this.routeService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.routeService.remove(+id);
  }
}
