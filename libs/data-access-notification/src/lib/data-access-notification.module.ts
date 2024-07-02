import { Module } from '@nestjs/common';
import { PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, Entity } from 'typeorm';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
@Entity()
export class DataAccessNotificationModule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // @ManyToOne(() => User)
  // user: User;

  @Column()
  type!: 'email' | 'sms' | 'push';

  @Column()
  message!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: 'timestamp', nullable: true })
  readAt?: Date;

  @Column()
  status!: 'unread' | 'read';
}