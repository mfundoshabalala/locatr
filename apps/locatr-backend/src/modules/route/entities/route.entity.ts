import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';

import { OrderEntity } from 'src/modules/order/entities/order.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { VehicleEntity } from 'src/modules/vehicle/entities/vehicle.entity';

@Entity({ name: 'Route' })
export class RouteEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id!: number;

  @ManyToOne(() => OrderEntity, { eager: true })
  @JoinColumn({ name: 'orderID' })
  order!: Relation<OrderEntity>;

  @ManyToOne(() => UserEntity, { eager: true })
  @JoinColumn({ name: 'driverID' })
  driver!: UserEntity;

  @ManyToOne(() => VehicleEntity, { eager: true })
  @JoinColumn({ name: 'vehicleID' })
  vehicle!: VehicleEntity;

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
