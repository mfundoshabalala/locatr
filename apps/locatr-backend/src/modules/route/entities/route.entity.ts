import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

import { Order } from '@migrations/order/entities/order.entity';
import { User } from '@migrations/user/entities/user.entity';

@Entity()
export class Route {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'orderID' })
  order!: Order;

  @ManyToOne(() => User)
  driver!: User;

  @Column({ nullable: true })
  startTime!: Date;

  @Column({ nullable: true })
  endTime!: Date;

  @Column('jsonb')
  routePath!: object;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ nullable: true })
  createdBy!: string;

  @UpdateDateColumn()
  updatedAt!: Date;

  @Column({ nullable: true })
  updatedBy!: string;
}
