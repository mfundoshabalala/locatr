import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
// entities
import { Employee } from "@migrations/employee/entities/employee.entity";
import { Contact } from "@migrations/contact/entities/contact.entity";
import { Role } from "@migrations/role/entities/role.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'userID' })
  id!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  username!: string;

  @Column({ unique: true, type: 'varchar', length: 255 })
  email!: string;

  @Column({ type: 'varchar', length: 255 })
  password!: string;

  @Column({ type: 'boolean', default: false })
  isVerified!: boolean;

  @OneToOne(() => Employee, { cascade: true })
  @JoinColumn({ name: 'employeeID' })
  employee!: Employee;

  @OneToOne(() => Contact, { cascade: true })
  @JoinColumn({ name: 'contactID' })
  contact!: Contact;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'userID',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'roleID',
      referencedColumnName: 'id',
    }
  })
  roles!: Role[];

  @CreateDateColumn({ type: 'timestamp', update: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;

  @Column({ nullable: false, update: false, length: 255, type: 'varchar', default: 'system' })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt!: Date;

  @Column({ nullable: true, length: 255, type: 'varchar', default: 'system' })
  updatedBy!: string;
}
