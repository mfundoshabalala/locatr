import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';

import { User } from '../../user/entities/user.entity';

@Entity()
export class Role  {
  @PrimaryGeneratedColumn('uuid', { name: 'roleID' })
  id!: string;

  @Column()
  name!: string;

  @OneToOne(() => User, (user) => user.role)
  user!: User;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt!: Date;

  @Column()
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt!: Date;

  @Column()
  updatedBy!: string;
}
