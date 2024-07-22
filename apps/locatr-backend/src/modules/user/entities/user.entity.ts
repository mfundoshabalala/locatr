import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// entities
import { Role } from "../../role/entities/role.entity";
import { Employee } from "../../employee/entities/employee.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'userID' })
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  verified!: boolean;

  @OneToOne(() => Role, (role) => role.user)
  @JoinColumn()
  role!: Role; // assigned based on department and position

  @OneToOne(() => Employee, (employee) => employee.user, { cascade: true })
  @JoinColumn()
  employee!: Employee;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt!: Date;

  @Column({ nullable: true })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt!: Date;

  @Column({ nullable: true })
  updatedBy!: string;
}
