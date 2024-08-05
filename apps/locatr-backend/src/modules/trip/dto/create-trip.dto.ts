import { IsString, IsDate } from "class-validator";

export class CreateTripDto {
  @IsString()
  destination!: string;

  @IsDate()
  startTime!: Date;

  @IsDate()
  endTime!: Date;

  @IsString()
  status!: string;
}
