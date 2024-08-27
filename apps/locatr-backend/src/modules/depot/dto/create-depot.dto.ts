import { IsNumber, IsString } from "class-validator";

export class CreateDepotDto {
  @IsString()
  name!: string;

  @IsString()
  address!: string;

  @IsNumber()
  latitude!: number;

  @IsNumber()
  longitude!: number;

  @IsNumber()
  capacity!: number;
}
