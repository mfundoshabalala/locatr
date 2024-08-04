import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToOne, Unique } from 'typeorm';

import { Site } from '@migrations/site/entities/site.entity';
import { Contact } from '@migrations/contact/entities/contact.entity';
import { Industry } from '@migrations/industry/entities/industry.entity';

@Entity()
export class Client {

  @PrimaryGeneratedColumn('uuid', { name: 'clientID' })
  id!: string;

  @Column()
  @IsNotEmpty()
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

  @ManyToOne(() => Industry, { eager: true })
  @JoinColumn({ name: 'industryID' })
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
