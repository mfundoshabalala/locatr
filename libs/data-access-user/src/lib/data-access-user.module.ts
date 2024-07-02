import { Module } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
@Entity()
export class DataAccessUserModule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  passwordHash!: string;

  @Column('simple-array')
  roles!: string[]; // e.g., 'admin', 'driver', 'user'

  @Column({ type: 'jsonb', nullable: true })
  preferences?: UserPreferences;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export class UserPreferences {
  mapSettings!: MapSettings;
  notificationSettings!: NotificationSettings;
}

export class MapSettings {
  defaultLayer!: string; // e.g., 'satellite', 'terrain'
  zoomLevel!: number;
}

export class NotificationSettings {
  email!: boolean;
  sms!: boolean;
  push!: boolean;
}

