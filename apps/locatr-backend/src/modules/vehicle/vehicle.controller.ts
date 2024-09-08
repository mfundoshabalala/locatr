import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

import { VehicleService } from './vehicle.service';
import { VehicleEntity } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@ApiTags('vehicle')
@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll(): Promise<VehicleEntity[]> {
    return this.vehicleService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<VehicleEntity | null> {
    return this.vehicleService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto): Promise<VehicleEntity> {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.vehicleService.remove(id);
  }
}
