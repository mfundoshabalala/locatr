import { Client } from "src/modules/client/entities/client.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";

@Entity()
export class Site {
  @PrimaryGeneratedColumn('uuid', { name: 'siteID' })
  id!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  name!: string;

  @Column('text', { nullable: true })
  description!: string;

  @Column({ default: true, type: 'boolean' })
  active!: boolean;

  @Column({ type: 'varchar', length: 255, comment: 'Formatted address of the site from the Google Place API' })
  address!: string;

  @Column('decimal', { precision: 9, scale: 6, comment: 'Latitude of the site from the Google Place API' })
  latitude!: number;

  @Column('decimal', { precision: 9, scale: 6, comment: 'Longitude of the site from the Google Place API' })
  longitude!: number;

  @ManyToOne(() => Client, (client) => client.sites, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'clientID' })
  client!: Relation<Client>;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
