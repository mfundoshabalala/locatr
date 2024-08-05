import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(@InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>) {}

  create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleRepository.save(createVehicleDto);
  }

  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  findOne(id: string): Promise<Vehicle | null> {
    return this.vehicleRepository.findOne({ where: { id } });
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<UpdateResult> {
    return this.vehicleRepository.update(id, updateVehicleDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.vehicleRepository.delete(id);
  }
}
