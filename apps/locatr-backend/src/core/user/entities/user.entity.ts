import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

import { UserRole, UserStatus } from "src/common/enums";
import { ContactEntity } from "src/modules/contact/entities/contact.entity";
import { EmployeeEntity } from "src/modules/employee/entities/employee.entity";
import { VehicleEntity } from "src/modules/vehicle/entities/vehicle.entity";

@Entity({ name: 'User' })
export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid', { name: 'userID' })
  id!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  username!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  email!: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password!: string;

  // @ApiProperty({ example: false, description: 'Verify the user email.' })
  @Column({ type: 'boolean', default: false })
  isVerified!: boolean;

  @OneToOne(() => EmployeeEntity, { cascade: true, eager: true })
  @JoinColumn({ name: 'employeeID' })
  employee!: EmployeeEntity;

  @OneToOne(() => ContactEntity, { cascade: true, eager: true })
  @JoinColumn({ name: 'contactID' })
  contact!: ContactEntity;

  @OneToOne(() => VehicleEntity, (vehicle) => vehicle.driver, { nullable: true, eager: true })
  @JoinColumn({ name: 'vehicleID' })
  assignedVehicle!: Relation<VehicleEntity>;

  @ApiProperty({ example: "active", description: 'User status.' })
  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  status!: UserStatus;

  @ApiProperty({ example: 'driver', description: 'User role.' })
  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role!: UserRole;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
