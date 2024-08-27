import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RouteEntity } from './entities/route.entity';

@Injectable()
export class RouteService {
  constructor(@InjectRepository(RouteEntity) private routeRepository: Repository<RouteEntity>) {}

  async create(createRouteDto: CreateRouteDto): Promise<RouteEntity> {
    const route = this.routeRepository.create(createRouteDto);
    await this.routeRepository.save(route);

    const savedRoute = await this.routeRepository.findOne({
      where: { id: route.id },
      relations: ['driver', 'order', 'vehicle']
    });

    if (!savedRoute) {
      throw new NotFoundException('Order not found after creation');
    }

    return savedRoute;
  }

  findAll(): Promise<RouteEntity[]> {
    return this.routeRepository.find();
  }

  findOne(id: number): Promise<RouteEntity | null> {
    return this.routeRepository.findOne({ where: { id } });
  }

  async update(id: number, updateRouteDto: UpdateRouteDto) {
    await this.routeRepository.update(id, updateRouteDto);
    return this.routeRepository.findOne({ where: { id } });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.routeRepository.delete(id);
  }
}
