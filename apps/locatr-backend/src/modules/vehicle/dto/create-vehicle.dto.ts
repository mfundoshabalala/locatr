import { Optional } from "@nestjs/common";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { VehicleType } from "@common/enums";

export class CreateVehicleDto {
  @IsString()
  make!: string;

  @IsString()
  model!: string;

  @IsNumber()
  year!: number;

  @IsEnum(VehicleType)
  type!: VehicleType;

  @IsString()
  licensePlate!: string;

  @Optional()
  @IsNumber()
  capacity!: number;

  @Optional()
  @IsString()
  currentLocation!: string;
}
