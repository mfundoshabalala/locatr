import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from '@migrations/role/entities/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  private async getUserDefaultRole() {
    const headCount = await this.userRepository.count();
    if (headCount === 0) {
      return await this.roleRepository.findOne({ where: { name: 'owner' } });
    }
    return await this.roleRepository.findOne({ where: { name: 'user' } });
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(enteredPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, hashedPassword);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    const role = await this.getUserDefaultRole();
    user.roles = [role as Role];
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneBy(username: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
