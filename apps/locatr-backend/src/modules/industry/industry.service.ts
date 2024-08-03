import { Injectable } from '@nestjs/common';
import { CreateIndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Industry } from './entities/industry.entity';

@Injectable()
export class IndustryService {
  constructor(@InjectRepository(Industry) private industryRepository: Repository<Industry>) {}

  create(createIndustryDto: CreateIndustryDto) {
    return 'This action adds a new industry';
  }

  findAll() {
    return this.industryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} industry`;
  }

  update(id: number, updateIndustryDto: UpdateIndustryDto) {
    return `This action updates a #${id} industry`;
  }

  remove(id: number) {
    return `This action removes a #${id} industry`;
  }
}
