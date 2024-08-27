// src/vehicle/vehicle.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from 'typeorm';

import { DepotEntity } from 'src/modules/depot/entities/depot.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { VehicleType } from 'src/common/enums';

@Entity({ name: 'Vehicle'})
export class VehicleEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicleID' })
  id!: string;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column({ type: 'enum', enum: VehicleType })
  type!: VehicleType;

  @Column()
  year!: number;

  @Column()
  licensePlate!: string;

  @Column({ nullable: true })
  capacity!: number;

  @ManyToOne(() => DepotEntity, { nullable: true, eager: true })
  @JoinColumn({ name: 'depotID' })
  currentLocation?: Relation<DepotEntity>;

  @OneToOne(() => UserEntity, (user) => user.assignedVehicle, { nullable: true })
  @JoinColumn({ name: 'driverID' })
  driver?: Relation<UserEntity>;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar' })
  updatedBy!: string;
}
