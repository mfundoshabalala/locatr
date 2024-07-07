import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(userID: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { userID } });
  }

  create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(userID: number, updateUser: User): Promise<User | null> {
    await this.usersRepository.update(userID, updateUser);
    return this.usersRepository.findOne({ where: { userID } });
  }

  async delete(userID: number): Promise<void> {
    await this.usersRepository.delete(userID);
  }
}
