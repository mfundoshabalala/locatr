import { ClientEntity } from '../client/entities/client.entity';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ClientEntity, UserEntity])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
