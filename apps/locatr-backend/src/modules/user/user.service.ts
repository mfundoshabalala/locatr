import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from 'src/common/enums';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    if (await this.hasActiveUsers()) createUserDto.role = UserRole.CUSTOMER;
    else createUserDto.role = UserRole.ADMIN;
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  findOneBy(username: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { username },
      relations: ['employee', 'contact', 'assignedVehicle', 'assignedVehicle.currentLocation']
    });
  }

  findById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({
      where: { id },
      relations: ['employee', 'contact', 'assignedVehicle', 'assignedVehicle.currentLocation']
    });
  }

  remove(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

  private hasActiveUsers() {
    return this.userRepository.count();
  }
}
