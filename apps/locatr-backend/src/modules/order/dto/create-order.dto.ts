import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { OrderType, OrderStatus, OrderPriority } from "src/common/enums";

export class CreateOrderDto {
  @IsNumber()
  orderNumber!: number;

  @IsString()
  @IsUUID()
  customerID!: string;

  @IsString()
  @IsUUID()
  depotID!: string;

  @IsString()
  @IsUUID()
  siteID!: string;

  @IsNotEmpty()
  @IsEnum(OrderType)
  type!: OrderType;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus = OrderStatus.PENDING;

  @IsOptional()
  @IsEnum(OrderPriority)
  priority?: OrderPriority = OrderPriority.MEDIUM;
}
