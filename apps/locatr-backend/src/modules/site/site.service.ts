import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Site } from './entities/site.entity';
import { UpdateSiteDto } from './dto/update-site.dto';
import { CreateSiteDto } from './dto/create-site.dto';

@Injectable()
export class SiteService {
  constructor(@InjectRepository(Site) private siteRepository: Repository<Site>) {}

  create(createSiteDto: CreateSiteDto) {
    return this.siteRepository.save(createSiteDto);
  }

  findAll() {
    return this.siteRepository.find();
  }

  findOne(id: string) {
    return this.siteRepository.findOne({ where: { id } });
  }

  update(id: string, updateSiteDto: UpdateSiteDto) {
    return this.siteRepository.update(id, updateSiteDto);
  }

  remove(id: string) {
    return this.siteRepository.delete(id);
  }
}
