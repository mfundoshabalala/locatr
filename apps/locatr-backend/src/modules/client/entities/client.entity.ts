import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

import { ContactEntity } from 'src/modules/contact/entities/contact.entity';
import { Industry } from 'src/modules/industry/entities/industry.entity';
import { OrderEntity } from 'src/modules/order/entities/order.entity';
import { SiteEntity } from 'src/modules/site/entities/site.entity';

@Entity({ name: 'Client' })
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'clientID' })
  id!: string;

  @Unique('clientName', ['name'])
  @Column({ name: 'clientName', unique: true, type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'simple-array', nullable: true })
  businessHours: string[] = [];

  @Column({ length: 255, nullable: true })
  website!: string;

  @Column({ type: 'text', nullable: true })
  notes!: string;

  @Column({ type: 'simple-array', nullable: true })
  services?: string[] = [];

  @Column({ default: true, type: 'boolean' })
  isActive!: boolean;

  @OneToOne(() => ContactEntity, { cascade: true, eager: true })
  @JoinColumn({ name: 'contactID' })
  contact!: ContactEntity;

  @OneToMany(() => SiteEntity, (site) => site.client, {
    nullable: true,
    orphanedRowAction: 'delete',
    eager: true,
    cascade: ['insert', 'update', 'remove'],
  })
  sites!: SiteEntity[];

  @OneToMany(() => OrderEntity, (order) => order.customer, { nullable: true, orphanedRowAction: 'delete' })
  orders!: OrderEntity[];

  @ManyToOne(() => Industry, { eager: true })
  industry!: Industry;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
