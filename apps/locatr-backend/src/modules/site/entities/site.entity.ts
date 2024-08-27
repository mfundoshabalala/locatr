import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";

import { ClientEntity } from "src/modules/client/entities/client.entity";

@Entity({ name: 'Site' })
export class SiteEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'siteID' })
  id!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  name!: string;

  @Column('text', { nullable: true })
  description!: string;

  @Column({ default: true, type: 'boolean' })
  active!: boolean;

  @Column({ type: 'varchar', length: 255 })
  address!: string;

  @Column({ type: 'decimal', precision: 10, scale: 7, default: 0.0 })
  latitude!: number;

  @Column({ type: 'decimal', precision: 10, scale: 7, default: 0.0 })
  longitude!: number;

  @ManyToOne(() => ClientEntity, (client) => client.sites, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'clientID' })
  client!: Relation<ClientEntity>;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
