import { VehicleEntity } from "src/modules/vehicle/entities/vehicle.entity";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, Relation } from "typeorm";

@Entity({ name: 'Depot' })
export class DepotEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  address!: string;

  @Column({ type: 'decimal', precision: 10, scale: 7, default: 0.0 })
  latitude!: number;

  @Column({ type: 'decimal', precision: 10, scale: 7, default: 0.0 })
  longitude!: number;

  @Column({ nullable: true })
  capacity!: number;

  @OneToMany(() => VehicleEntity, (vehicle) => vehicle.currentLocation, { orphanedRowAction: 'delete', nullable: true })
  vehicles?: Relation<VehicleEntity[]>;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
