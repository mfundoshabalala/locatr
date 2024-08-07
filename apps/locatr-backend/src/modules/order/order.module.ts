import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { OrderController } from './order.controller';
import { Client } from '@migrations/client/entities/client.entity';
import { User } from '@migrations/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Client, User])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
