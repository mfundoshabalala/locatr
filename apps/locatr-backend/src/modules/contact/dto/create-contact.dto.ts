import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class CreateContactDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

	@IsString()
  phone!: string;

	@IsEmail()
  @IsOptional()
  email?: string;
}
