import { Optional } from "@nestjs/common";
import { IsNumber, IsString } from "class-validator";

export class CreateVehicleDto {
  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @IsNumber()
  year!: number;

  @IsString()
  licensePlate!: string;

  @Optional()
  @IsNumber()
  capacity!: number;

  @Optional()
  @IsString()
  currentLocation!: string;
}
