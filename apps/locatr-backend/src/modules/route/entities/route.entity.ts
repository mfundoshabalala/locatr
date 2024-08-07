import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

import { Order } from '@migrations/order/entities/order.entity';
import { User } from '@migrations/user/entities/user.entity';
import { Vehicle } from '@migrations/vehicle/entities/vehicle.entity';

@Entity()
export class Route {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @ManyToOne(() => Order, { eager: true })
  @JoinColumn({ name: 'orderID' })
  order!: Order;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'driverID' })
  driver!: User;

  @ManyToOne(() => Vehicle, { eager: true })
  @JoinColumn({ name: 'vehicleID' })
  vehicle!: Vehicle;

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
