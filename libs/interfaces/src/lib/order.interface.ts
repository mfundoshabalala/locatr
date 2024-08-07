import { OrderPriority, OrderStatus, OrderType } from "./enums";
import { UserInterface } from "./user.interface";

export interface OrderInterface {
  id?: string;
  orderNumber: number;
  customer: UserInterface;
  pickupAddress: string;
  deliveryAddress: string;
  type: OrderType;
  status: OrderStatus;
  priority: OrderPriority;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}