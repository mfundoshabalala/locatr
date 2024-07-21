import { IsString, IsObject, MaxLength, MinLength, IsNotEmpty, IsNotEmptyObject, IsUUID, IsOptional } from 'class-validator';

import { CreateEmployeeDto } from '../../employee/dto/create-employee.dto';
import { Role } from '../../role/entities/role.entity';
import { Unique } from 'typeorm';

export class CreateUserDto {
  @MinLength(4)
  @MaxLength(20)
  @IsString()
  @Unique(['username'])
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  readonly roleID: string;

  @IsNotEmptyObject({ nullable: true })
  @IsObject()
  readonly role: Role;

  @IsNotEmptyObject({ nullable: true })
  @IsObject()
  readonly employee: CreateEmployeeDto;
}
