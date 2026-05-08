import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { randomBytes } from 'crypto';

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

  findOneByName(username: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { username },
      relations: ['employee', 'contact', 'assignedVehicle', 'assignedVehicle.currentLocation']
    });
  }

  getUserById(id: string): Promise<UserEntity | null> {
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

  private async hasActiveUsers(): Promise<number> {
    return await this.userRepository.count();
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findByPasswordResetToken(token: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { passwordResetToken: token },
    });
  }

  async findByVerificationToken(token: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { verificationToken: token },
    });
  }

  async setPasswordResetToken(userId: string): Promise<string> {
    const token = randomBytes(32).toString('hex');
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 1); // 1 hour expiry

    await this.userRepository.update(userId, {
      passwordResetToken: token,
      passwordResetTokenExpiry: expiry,
    });

    return token;
  }

  async setVerificationToken(userId: string): Promise<string> {
    const token = randomBytes(32).toString('hex');
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 24); // 24 hour expiry

    await this.userRepository.update(userId, {
      verificationToken: token,
      verificationTokenExpiry: expiry,
    });

    return token;
  }

  async verifyEmail(userId: string): Promise<void> {
    await this.userRepository.update(userId, {
      isVerified: true,
      verificationToken: null,
      verificationTokenExpiry: null,
    });
  }

  async updatePassword(userId: string, hashedPassword: string): Promise<void> {
    await this.userRepository.update(userId, {
      password: hashedPassword,
      passwordResetToken: null,
      passwordResetTokenExpiry: null,
    });
  }
}
