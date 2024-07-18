import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// base entity
import { Base } from '../../common/entities/base.entity';

@Entity()
export class Client extends Base {

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
}
