import { Order } from 'src/modules/order/entities/order.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

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
