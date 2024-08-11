import { IsNumber, IsString } from "class-validator";

export class CreateDepotDto {
  @IsString()
  name!: string;

  @IsString()
  address!: string;

  @IsString()
  latitude!: string;

  @IsString()
  longitude!: string;

  @IsNumber()
  capacity!: number;
}
