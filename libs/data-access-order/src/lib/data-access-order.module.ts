import { Module } from '@nestjs/common';
import { PrimaryGeneratedColumn, ManyToOne, OneToMany, Column, CreateDateColumn, Entity } from 'typeorm';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
@Entity()
export class DataAccessOrderModule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // @ManyToOne(() => Client)
  // client: Client;

  // @ManyToOne(() => Location)
  // pickupLocation: Location;

  // @ManyToOne(() => Location)
  // deliveryLocation: Location;

  // @OneToMany(() => OrderItem, (item) => item.order)
  // items: OrderItem[];

  @Column()
  status!: 'pending' | 'in transit' | 'delivered';

  @CreateDateColumn()
  placedAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  deliveredAt?: Date;
}

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  description!: string;

  @Column('int')
  quantity!: number;

  @Column('float', { nullable: true })
  weight?: number; // in kg

  @Column('float', { nullable: true })
  volume?: number; // in cubic meters

  // @ManyToOne(() => Order, (order) => order.items)
  // order: Order;
}
