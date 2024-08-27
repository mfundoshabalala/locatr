import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { VehicleEntity } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(@InjectRepository(VehicleEntity) private vehicleRepository: Repository<VehicleEntity>) {}

  async create(createVehicleDto: CreateVehicleDto) {
    const vehicle = this.vehicleRepository.create(createVehicleDto);
    await this.vehicleRepository.save(vehicle);
    return this.vehicleRepository.findOne({ 
      where: { id: vehicle.id },
      relations: ['currentLocation', 'driver']
    });
  }

  findAll(): Promise<VehicleEntity[]> {
    return this.vehicleRepository.find({
      relations: ['currentLocation', 'driver']
    });
  }

  findOne(id: string): Promise<VehicleEntity | null> {
    return this.vehicleRepository.findOne({ 
      where: { id },
      relations: ['currentLocation', 'driver']
    });
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto): Promise<VehicleEntity> {
    try {
      return this.vehicleRepository.save(updateVehicleDto, { reload: true, transaction: true });
    } catch (error) {
      throw new Error('Failed to update vehicle');
    }
  }

  remove(id: string): Promise<DeleteResult> {
    return this.vehicleRepository.delete(id);
  }
}
