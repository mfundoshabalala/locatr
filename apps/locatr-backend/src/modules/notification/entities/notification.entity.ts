import { User } from '@migrations/user/entities/user.entity';
import { UserNotification } from '@common/enums';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  message!: string;

  @Column(
    {
      type: 'enum',
      enum: UserNotification,
      default: UserNotification.INFO
    },
  )
  type!: UserNotification;

  
  @Column({ default: false })
  isRead!: boolean;
  
  @Column({ nullable: true })
  readAt!: Date;
  
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ nullable: true })
  createdBy!: string;
}
