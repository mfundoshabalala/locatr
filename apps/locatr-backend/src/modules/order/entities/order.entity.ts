import { User } from '@migrations/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid', { name: 'orderID' })
  id!: string;

  @Column({ type: 'alphanum', generated: 'increment', name: 'orderNumber' })
  orderNumber!: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'customerID' })
  customer!: User;

  @Column()
  pickupAddress!: string;

  @Column()
  deliveryAddress!: string;

  @Column()
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ nullable: true })
  createdBy!: string;

  @UpdateDateColumn({ onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true })
  updatedBy!: string;
}
