import { UserNotification } from 'src/common/enums';
import { User } from 'src/modules/user/entities/user.entity';
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
