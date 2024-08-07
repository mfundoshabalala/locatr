import { EntityInterface, OrderPriority, OrderStatus, OrderType } from "./enums";
import { UserInterface } from "./user.interface";

export interface OrderInterface extends EntityInterface {
  orderNumber: number;
  customer: UserInterface;
  pickupAddress: string;
  deliveryAddress: string;
  type: OrderType;
  status: OrderStatus;
  priority: OrderPriority;
}