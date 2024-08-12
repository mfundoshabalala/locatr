import { Contact } from 'src/modules/contact/entities/contact.entity';
import { Industry } from 'src/modules/industry/entities/industry.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Site } from 'src/modules/site/entities/site.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToOne,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity()
export class Client {
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

  @OneToOne(() => Contact, { cascade: true, eager: true })
  @JoinColumn({ name: 'contactID' })
  contact!: Contact;

  @OneToOne(() => Site, { cascade: true, eager: true })
  @JoinColumn({ name: 'siteID' })
  site!: Site;

  @OneToMany(() => Order, (order) => order.client, { nullable: true, orphanedRowAction: 'delete' })
  orders!: Order[];

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
