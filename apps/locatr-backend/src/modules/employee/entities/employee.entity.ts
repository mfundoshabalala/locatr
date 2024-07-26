import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";

import { User } from "@migrations/user/entities/user.entity";
import { Contact } from "@migrations/contact/entities/contact.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid', { name: 'employeeID' })
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  firstName!: string;

  @Column({ type: 'varchar', length: 255 })
  lastName!: string;

  @Column({ length: 255 })
  position!: string;

  @Column({ length: 255, nullable: true })
  department!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userID' })
  user!: User;

  @OneToOne(() => Contact, { cascade: true })
  @JoinColumn({ name: 'contactID' })
  contact!: Contact;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
