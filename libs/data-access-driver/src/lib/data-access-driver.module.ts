import { Module } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Vehicle } from './vehicle.entity';
// import { Route } from './route.entity';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
@Entity()
export class DataAccessDriverModule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  contactNumber!: string;

  @Column({ unique: true })
  licenseNumber!: string;

  // @ManyToOne(() => Vehicle, { nullable: true })
  // vehicle?: Vehicle;

  // @ManyToOne(() => Route, { nullable: true })
  // assignedRoute?: Route;

  @Column()
  status!: 'available' | 'on duty' | 'off duty';
}
