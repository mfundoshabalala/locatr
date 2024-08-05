// src/vehicle/vehicle.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicleID' })
  id!: string;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column()
  year!: number;

  @Column()
  licensePlate!: string;

  @Column({ nullable: true })
  capacity!: number;

  @Column({ nullable: true })
  currentLocation?: string;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
