import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';

import { Site } from '@migrations/site/entities/site.entity';
import { Contact } from '@migrations/contact/entities/contact.entity';
import { Industry } from '@migrations/industry/entities/industry.entity';
@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid', { name: 'clientID' })
  id!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  @IsNotEmpty()
  name!: string;

  @ManyToOne(() => Industry)
  @JoinColumn({ name: 'industryID' })
  industry!: Industry;

  @ManyToOne(() => Contact)
  @JoinColumn({ name: 'contactID' })
  contact!: Contact;

  @ManyToOne(() => Site)
  @JoinColumn({ name: 'siteID' })
  site!: Site;

  @Column({ type: 'jsonb', nullable: true })
  businessHours: any;

  @Column({ length: 255, nullable: true })
  website!: string;

  @Column({ type: 'text', nullable: true })
  notes!: string;

  @Column({ type: 'text', nullable: true })
  servicesProvided!: string;

  @Column({ length: 50 })
  status!: string;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
