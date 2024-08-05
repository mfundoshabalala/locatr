import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Route } from './entities/route.entity';

@Injectable()
export class RouteService {
  constructor(@InjectRepository(Route) private routeRepository: Repository<Route>) {}

  create(createRouteDto: CreateRouteDto): Promise<Route> {
    return this.routeRepository.save(createRouteDto);
  }

  findAll(): Promise<Route[]> {
    return this.routeRepository.find();
  }

  findOne(id: number): Promise<Route | null> {
    return this.routeRepository.findOne({ where: { id } });
  }

  update(id: number, updateRouteDto: UpdateRouteDto): Promise<UpdateResult> {
    return this.routeRepository.update(id, updateRouteDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.routeRepository.delete(id);
  }
}
