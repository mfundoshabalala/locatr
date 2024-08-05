// src/trip/trip.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn('uuid', { name: 'tripID' })
  id!: string;

  @Column()
  destination!: string;

  @Column('timestamp')
  startTime!: Date;

  @Column('timestamp')
  endTime!: Date;

  @Column()
  status!: string; // e.g., 'Scheduled', 'In Progress', 'Completed'
}
