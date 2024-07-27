import { IsString, IsNotEmpty, IsEmail, IsOptional } from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

	@IsString()
  phone!: string;

	@IsEmail()
  @IsOptional()
  email?: string;
}
