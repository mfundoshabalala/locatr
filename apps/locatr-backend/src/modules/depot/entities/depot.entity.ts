import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Depot {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  address!: string;

  @Column()
  latitude!: string;

  @Column()
  longitude!: string;

  @Column({ nullable: true })
  capacity!: number;
}
