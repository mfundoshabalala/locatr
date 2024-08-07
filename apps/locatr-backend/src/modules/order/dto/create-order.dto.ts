import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { OrderPriority, OrderStatus, OrderType } from "@common/enums";

export class CreateOrderDto {
  @IsNumber()
  orderNumber!: number;

  @IsString()
  customerId!: string;

  @IsString()
  pickupAddress!: string;

  @IsString()
  deliveryAddress!: string;

  @IsEnum(OrderType)
  type!: OrderType;

  @IsOptional()
  @IsEnum(OrderStatus)
  status!: OrderStatus;

  @IsOptional()
  @IsEnum(OrderPriority)
  priority!: OrderPriority;
}
