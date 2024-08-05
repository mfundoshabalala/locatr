import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Trip } from './entities/trip.entity';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Injectable()
export class TripService {
  constructor(@InjectRepository(Trip) private tripRepository: Repository<Trip>) {}

  create(createTripDto: CreateTripDto): Promise<Trip> {
    return this.tripRepository.save(createTripDto);
  }

  findAll(): Promise<Trip[]> {
    return this.tripRepository.find();
  }

  findOne(id: string): Promise<Trip | null> {
    return this.tripRepository.findOne({ where: { id } });
  }

  update(id: string, updateTripDto: UpdateTripDto): Promise<UpdateResult> {
    return this.tripRepository.update(id, updateTripDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.tripRepository.delete(id);
  }
}
