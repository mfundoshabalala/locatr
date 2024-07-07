import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;
}
