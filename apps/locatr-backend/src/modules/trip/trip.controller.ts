import { DeleteResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TripService } from './trip.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { TripEntity } from './entities/trip.entity';
import { CurrentUserInterceptor } from 'src/middleware';

@ApiTags('trip')
@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createTripDto: CreateTripDto): Promise<TripEntity> {
    return this.tripService.create(createTripDto);
  }

  @Get()
  findAll(): Promise<TripEntity[]> {
    return this.tripService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<TripEntity | null> {
    return this.tripService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateTripDto: UpdateTripDto) {
    return this.tripService.update(id, updateTripDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.tripService.remove(id);
  }
}
