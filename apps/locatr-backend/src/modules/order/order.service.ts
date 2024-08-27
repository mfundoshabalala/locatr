import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { OrderEntity } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>) {}
 
  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const order = this.orderRepository.create(createOrderDto);
    await this.orderRepository.save(order);

    const savedOrder = await this.orderRepository.findOne({
      where: { id: order.id },
      relations: ['customer', 'depot', 'site'],
    });

    if (!savedOrder) {
      throw new NotFoundException('Order not found after creation');
    }

    return savedOrder;
  }

  findAll(): Promise<OrderEntity[]> {
    return this.orderRepository.find({ relations: ['customer', 'depot', 'site'] });
  }

  findOne(id: string): Promise<OrderEntity | null> {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['customer', 'depot', 'site']
    });
  }

  update(id: string, updateOrderDto: UpdateOrderDto): Promise<UpdateResult> {
    return this.orderRepository.update(id, updateOrderDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.orderRepository.delete(id);
  }
}
