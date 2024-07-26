import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Client {

  @PrimaryGeneratedColumn('uuid', { name: 'clientID' })
  id: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  @IsNotEmpty()
  address: string;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt: Date;

  @Column()
  updatedBy: string;
}
