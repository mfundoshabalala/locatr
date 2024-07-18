import { CreateDateColumn, Column, UpdateDateColumn } from "typeorm";

export abstract class Base {
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  updatedBy: string;
}
