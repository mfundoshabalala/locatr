import { Optional } from "@nestjs/common";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { VehicleType } from "src/common/enums";
import { DepotEntity } from "src/modules/depot/entities/depot.entity";

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
  currentLocation!: DepotEntity;
}
