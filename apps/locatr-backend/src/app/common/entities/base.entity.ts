import { CreateDateColumn, Column, UpdateDateColumn } from "typeorm";

export class Base {
  @CreateDateColumn({ type: 'timestamp', name: 'createdAt' })
  createdAt: Date;

  @Column()
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamp', name: 'updatedAt' })
  updatedAt: Date;

  @Column()
  updatedBy: string;
}
