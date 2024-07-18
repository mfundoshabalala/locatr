import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsString()
  readonly position: string;

  @IsString()
  readonly department: string;
}
