import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Relation, Unique, UpdateDateColumn } from 'typeorm';
import { OrderPriority, OrderStatus, OrderType } from 'src/common/enums';

import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { DepotEntity } from 'src/modules/depot/entities/depot.entity';
import { RouteEntity } from 'src/modules/route/entities/route.entity';
import { SiteEntity } from 'src/modules/site/entities/site.entity';

@Entity({ name: 'Order' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'orderID' })
  id!: string;

  @Unique(['orderNumber'])
  @Column({ type: 'bigint', generated: 'identity', name: 'orderNumber' })
  orderNumber!: number;

  @ManyToOne(() => ClientEntity, (client) => client.orders, { eager: true })
  @JoinColumn({ name: 'customerID' })
  customer!: Relation<ClientEntity>;

  @ManyToOne(() => DepotEntity, { eager: true, nullable: true })
  @JoinColumn({ name: 'depotID' })
  depot!: Relation<DepotEntity>;

  @ManyToOne(() => SiteEntity, { eager: true })
  @JoinColumn({ name: 'siteID' })
  site!: Relation<SiteEntity>;

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
