import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

	@IsString()
  phone!: string;

	@IsEmail()
  @IsNotEmpty()
  email!: string;

	@IsString()
  position!: string;
}
