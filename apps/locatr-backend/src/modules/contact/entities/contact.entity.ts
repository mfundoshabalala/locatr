import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'Contact' })
export class ContactEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'contactID' })
  id!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  name!: string;

  @Column({ unique: true, type: 'varchar', nullable: true })
  phone!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  email?: string; // NOTE: Optional if needed for additional contact details

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
