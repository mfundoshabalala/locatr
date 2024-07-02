import { Module } from '@nestjs/common';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
@Entity()
export class DataAccessRouteOptimizationSettingsModule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  avoidTolls!: boolean;

  @Column()
  avoidHighways!: boolean;

  @Column()
  priority!: 'shortest distance' | 'shortest time' | 'least fuel consumption';

  @Column('jsonb')
  timeWindows!: TimeWindow[];
}

export class TimeWindow {
  @Column('timestamp')
  start!: Date;

  @Column('timestamp')
  end!: Date;
}