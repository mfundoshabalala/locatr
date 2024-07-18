import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// entities
import { Role } from "../../role/entities/role.entity";
import { Employee } from "../../employee/entities/employee.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'userID' })
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @ManyToMany(() => Role, (role) => role.users)
  roles: Role[];

  @OneToOne(() => Employee, (employee) => employee.user, { cascade: true })
  @JoinColumn()
  employee: Employee;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt: Date;

  @Column()
  updatedBy: string;
}
