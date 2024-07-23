import { IsNotEmpty, IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid', { name: 'clientID' })
  id: string;

  @Column({ unique: true })
  @IsNotEmpty()
  name: string;

  @Column({ unique: true })
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  phone: string;

  @Column()
  @IsNotEmpty()
  address: string;

  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt!: Date;

  @Column({ nullable: true })
  createdBy!: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt!: Date;

  @Column({ nullable: true })
  updatedBy!: string;
}
