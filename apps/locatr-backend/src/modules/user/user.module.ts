import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { EmployeeEntity } from '../employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EmployeeEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
