import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// entities
import { Role } from "../../role/entities/role.entity";
import { Employee } from "../../employee/entities/employee.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'userID' })
  id: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  username: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @OneToOne(() => Role, (role) => role.user)
  @JoinColumn({ name: 'roleID' })
  role: Role; // assigned based on department and position

  @OneToOne(() => Employee, (employee) => employee.user, { cascade: true })
  @JoinColumn({ name: 'employeeID' })
  employee: Employee;

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy: string;
}
