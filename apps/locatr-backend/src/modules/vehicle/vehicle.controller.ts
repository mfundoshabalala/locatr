import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { VehicleService } from './vehicle.service';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll(): Promise<Vehicle[]> {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Vehicle | null> {
    return this.vehicleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto): Promise<UpdateResult> {
    return this.vehicleService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.vehicleService.remove(id);
  }
}
