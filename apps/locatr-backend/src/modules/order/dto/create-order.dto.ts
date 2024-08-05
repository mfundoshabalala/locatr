import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  @IsNumber()
  orderNumber!: number;

  @IsString()
  customerId!: string;

  @IsString()
  pickupAddress!: string;

  @IsString()
  deliveryAddress!: string;

  @IsString()
  status!: string;
}
