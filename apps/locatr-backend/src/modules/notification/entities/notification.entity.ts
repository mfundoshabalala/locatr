import { UserNotification } from "src/common/enums";
import { UserEntity } from "src/core/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from "typeorm";

@Entity({ name: 'Notification' })
export class NotificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity)
  user!: UserEntity;

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
