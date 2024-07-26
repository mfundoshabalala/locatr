import { Unique } from 'typeorm';
import { IsString, IsObject, MaxLength, MinLength, IsNotEmpty, IsNotEmptyObject, IsUUID, IsOptional } from 'class-validator';

import { CreateEmployeeDto } from '../../employee/dto/create-employee.dto';
import { Role } from '../../role/entities/role.entity';

export class CreateUserDto {
  @MinLength(4)
  @MaxLength(10)
  @IsString()
  @Unique(['username'])
  readonly username!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmptyObject({ nullable: true })
  @IsObject()
  readonly employee!: CreateEmployeeDto;
}
