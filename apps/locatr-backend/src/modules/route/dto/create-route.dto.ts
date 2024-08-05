import { IsDate, IsNumber, IsObject, IsString } from "class-validator";

export class CreateRouteDto {
  @IsNumber()
  orderID!: number;

  @IsString()
  driverID!: string;

  @IsDate()
  startTime!: Date;

  @IsDate()
  endTime!: Date;

  @IsObject()
  routePath!: object;
}
