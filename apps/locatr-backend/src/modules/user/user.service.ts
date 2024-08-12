import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from 'src/common/enums';
import { Role } from '../role/entities/role.entity';

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

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (await this.hasActiveUsers()) createUserDto.role = UserRole.CUSTOMER;
    else createUserDto.role = UserRole.ADMIN;
    return this.userRepository.save(createUserDto);
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

  private hasActiveUsers() {
    return this.userRepository.count();
  }
}
