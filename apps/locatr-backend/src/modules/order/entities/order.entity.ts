import { OrderType, OrderStatus, OrderPriority } from 'src/common/enums';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, Unique, Relation } from 'typeorm';

import { Site } from 'src/modules/site/entities/site.entity';
import { Depot } from 'src/modules/depot/entities/depot.entity';
import { Client } from 'src/modules/client/entities/client.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid', { name: 'orderID' })
  id!: string;

  @Unique(['orderNumber'])
  @Column({ type: 'bigint', generated: 'identity', name: 'orderNumber' })
  orderNumber!: number;

  @ManyToOne(() => Client, (client) => client.orders, { eager: true })
  @JoinColumn({ name: 'customerID' })
  customer!: Relation<Client>;

  @ManyToOne(() => Depot, { eager: true })
  @JoinColumn({ name: 'depotID' })
  depot!: Relation<Depot>;

  @ManyToOne(() => Site, { eager: true })
  @JoinColumn({ name: 'siteID' })
  site!: Relation<Site>;

  @Column({ type: 'enum', enum: OrderType })
  type!: OrderType;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status!: OrderStatus;

  @Column({ type: 'enum', enum: OrderPriority, default: OrderPriority.MEDIUM })
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
