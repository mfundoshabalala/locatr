import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { TripEntity } from './entities/trip.entity';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Injectable()
export class TripService {
  constructor(@InjectRepository(TripEntity) private tripRepository: Repository<TripEntity>) {}

  create(createTripDto: CreateTripDto): Promise<TripEntity> {
    return this.tripRepository.save(createTripDto);
  }

  findAll(): Promise<TripEntity[]> {
    return this.tripRepository.find();
  }

  findOne(id: string): Promise<TripEntity | null> {
    return this.tripRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTripDto: UpdateTripDto) {
    await this.tripRepository.update(id, updateTripDto);
    return this.tripRepository.findOne({ where: { id } });
  }

  remove(id: string): Promise<DeleteResult> {
    return this.tripRepository.delete(id);
  }
}
