import { OrderType, OrderStatus, OrderPriority } from 'src/common/enums';
import { Client } from 'src/modules/client/entities/client.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, Unique, Relation } from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid', { name: 'orderID' })
  id!: string;

  @Unique(['orderNumber'])
  @Column({ type: 'bigint', generated: 'identity', name: 'orderNumber' })
  orderNumber!: number;

  // @ManyToOne(() => User, (user) => user.order,  { eager: true })
  // @JoinColumn({ name: 'customerID' })
  // customer!: User;

  @ManyToOne(() => Client, (client)=> client.orders, { eager: true })
  @JoinColumn({ name: 'clientID' })
  client!: Relation<Client>;

  @Column()
  pickupAddress!: string;

  @Column()
  deliveryAddress!: string;

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
