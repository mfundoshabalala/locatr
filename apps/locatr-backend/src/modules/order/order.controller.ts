import { DeleteResult, UpdateResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrderService } from './order.service';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll(): Promise<OrderEntity[]> {
    return this.orderService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<OrderEntity | null> {
    return this.orderService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<UpdateResult> {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.orderService.remove(id);
  }
}
