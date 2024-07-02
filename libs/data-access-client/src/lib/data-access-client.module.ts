import { Module } from '@nestjs/common';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
@Entity()
export class DataAccessClientModule {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column(() => ContactInfo)
  contactInfo!: ContactInfo;

  @ManyToMany(() => Location)
  @JoinTable()
  preferredLocations!: Location[];

  // @OneToMany(() => Order, (order) => order.client)
  // orderHistory: Order[];
}

export class ContactInfo {
  @Column()
  email!: string;

  @Column()
  phoneNumber!: string;

  @Column()
  address!: string;
}