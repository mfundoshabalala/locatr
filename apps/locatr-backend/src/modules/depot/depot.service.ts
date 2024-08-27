import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { DepotEntity } from './entities/depot.entity';

@Injectable()
export class DepotService {
  constructor(@InjectRepository(DepotEntity) private depotRepository: Repository<DepotEntity>) {}

  create(createDepotDto: CreateDepotDto): Promise<DepotEntity> {
    return this.depotRepository.save(createDepotDto);
  }

  findAll(): Promise<DepotEntity[]> {
    return this.depotRepository.find();
  }

  findOne(id: string): Promise<DepotEntity | null> {
    return this.depotRepository.findOne({ where : { id }});
  }

  async update(id: string, updateDepotDto: UpdateDepotDto): Promise<DepotEntity> {
    try {
      return await this.depotRepository.save(updateDepotDto, { reload: true, transaction: true });
    } catch (error) {
      throw new Error("Failed to update depot");
    }
  }

  remove(id: string): Promise<DeleteResult> {
    return this.depotRepository.delete(id);
  }
}
