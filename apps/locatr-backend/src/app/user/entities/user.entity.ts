import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
}
