import { IsString } from "class-validator";

export class CreateNotificationDto {
  @IsString()
  userId!: string;

  @IsString()
  message!: string;

  @IsString()
  status!: string;
}

