import { Unique } from 'typeorm';
import { IsString, IsObject, MinLength, IsNotEmpty, IsNotEmptyObject, IsEmail } from 'class-validator';

import { CreateContactDto } from '@migrations/contact/dto/create-contact.dto';
import { CreateEmployeeDto } from '@migrations/employee/dto/create-employee.dto';

export class CreateUserDto {
  @MinLength(4)
  @IsString()
  @Unique(['username'])
  readonly username!: string;

  @IsEmail()
  @Unique(['email'])
  @IsString()
  readonly email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsNotEmptyObject()
  @IsObject()
  readonly employee!: CreateEmployeeDto;

  @IsNotEmptyObject()
  @IsObject()
  readonly contact!: CreateContactDto;
}
