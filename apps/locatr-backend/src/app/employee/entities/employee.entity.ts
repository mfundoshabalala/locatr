import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid', { name: 'employeeID' })
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  position: string;

  @Column()
  department: string;

  @OneToOne(() => User, (user) => user.employee)
  user: User;
}
