import { IsString, IsArray } from 'class-validator';
import { CreateEmployeeDto } from '../../employee/dto/create-employee.dto';
import { Role } from '../../role/entities/role.entity';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsArray()
  readonly roles: Role[];

  readonly employee: CreateEmployeeDto;
}
