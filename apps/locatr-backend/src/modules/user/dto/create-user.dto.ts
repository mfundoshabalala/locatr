import { Unique } from 'typeorm';
import { IsString, IsObject, MinLength, IsNotEmpty, IsNotEmptyObject, IsEmail, IsEnum, IsAlphanumeric } from 'class-validator';

import { CreateContactDto } from '@migrations/contact/dto/create-contact.dto';
import { CreateEmployeeDto } from '@migrations/employee/dto/create-employee.dto';
import { UserRole } from '@common/enums';

export class CreateUserDto {
  @MinLength(8)
  @IsString()
  @Unique(['username'])
  readonly username!: string;

  @IsEmail()
  @Unique(['email'])
  @IsString()
  readonly email!: string;

  @IsNotEmpty()
  @MinLength(8)
  @IsAlphanumeric()
  password!: string;

  @IsNotEmptyObject()
  @IsObject()
  readonly employee!: CreateEmployeeDto;

  @IsNotEmptyObject()
  @IsObject()
  readonly contact!: CreateContactDto;

  @IsEnum(UserRole)
  role!: UserRole;
}
