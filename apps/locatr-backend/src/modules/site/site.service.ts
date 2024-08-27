import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SiteEntity } from './entities/site.entity';
import { UpdateSiteDto } from './dto/update-site.dto';
import { CreateSiteDto } from './dto/create-site.dto';

@Injectable()
export class SiteService {
  constructor(@InjectRepository(SiteEntity) private siteRepository: Repository<SiteEntity>) {}

  create(createSiteDto: CreateSiteDto) {
    return this.siteRepository.save(createSiteDto);
  }

  findAll() {
    return this.siteRepository.find();
  }

  findOne(id: string) {
    return this.siteRepository.findOne({ where: { id } });
  }

  async update(id: string, updateSiteDto: UpdateSiteDto) {
    await this.siteRepository.update(id, updateSiteDto);
    return this.siteRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.siteRepository.delete(id);
  }
}
