import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Base } from '../../common/entities/base.entity';

@Entity()
export class Role extends Base {
  @PrimaryGeneratedColumn('uuid', { name: 'roleID' })
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  @JoinTable()
  users: User[];
}
