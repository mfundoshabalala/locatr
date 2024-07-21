import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly position: string;

  @IsOptional()
  @IsString()
  readonly department: string;
}
