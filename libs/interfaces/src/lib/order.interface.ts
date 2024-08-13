import { ClientInterface } from "./client.interface";
import { DepotInterface } from "./depot.interface";
import { EntityInterface, OrderPriority, OrderStatus, OrderType } from "./enums";
import { SiteInterface } from "./site.interface";
// import { UserInterface } from "./user.interface";

export interface OrderInterface extends EntityInterface {
  orderNumber: number;
  customer?: ClientInterface;
  depot?: DepotInterface;
  site?: SiteInterface;
  type: OrderType;
  status: OrderStatus;
  priority: OrderPriority;
}