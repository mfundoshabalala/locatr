import { User } from '@migrations/user/entities/user.entity';
import { OrderPriority, OrderStatus, OrderType } from '@common/enums';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid', { name: 'orderID' })
  id!: string;

  @Column({ type: 'bigint', generated: 'identity', name: 'orderNumber' })
  orderNumber!: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'customerID' })
  customer!: User;

  @Column()
  pickupAddress!: string;

  @Column()
  deliveryAddress!: string;

  @Column({ type: 'enum', enum: OrderType })
  type!: OrderType;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status!: OrderStatus;

  @Column({ type: 'enum', enum: OrderPriority, default: OrderPriority.LOW })
  priority!: OrderPriority;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ nullable: true })
  createdBy!: string;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true })
  updatedBy!: string;
}
