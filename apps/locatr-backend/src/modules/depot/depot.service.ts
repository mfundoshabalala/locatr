import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { Depot } from './entities/depot.entity';

@Injectable()
export class DepotService {
  constructor(@InjectRepository(Depot) private depotRepository: Repository<Depot>) {}

  create(createDepotDto: CreateDepotDto): Promise<Depot> {
    return this.depotRepository.save(createDepotDto);
  }

  findAll(): Promise<Depot[]> {
    return this.depotRepository.find();
  }

  findOne(id: string): Promise<Depot | null> {
    return this.depotRepository.findOne({ where : { id }});
  }

  update(id: string, updateDepotDto: UpdateDepotDto): Promise<UpdateResult> {
    return this.depotRepository.update(id, updateDepotDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.depotRepository.delete(id);
  }
}
