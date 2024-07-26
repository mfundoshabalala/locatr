import { IsNotEmpty, IsString } from "class-validator";

export class CreateIndustryDto {
	@IsString()
  @IsNotEmpty()
  name!: string;

	@IsString()
  @IsNotEmpty()
  description!: string;
}
