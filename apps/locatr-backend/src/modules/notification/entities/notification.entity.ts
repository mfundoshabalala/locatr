import { User } from '@migrations/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';


@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  message!: string;

  @Column()
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
