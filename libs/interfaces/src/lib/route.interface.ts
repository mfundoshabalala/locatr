import { OrderInterface } from "./order.interface";
import { UserInterface } from "./user.interface";
import { VehicleInterface } from "./vehicle.interface";

export interface RouteInterface {
  id?: number;
  order: OrderInterface;
  driver: UserInterface;
  vehicle: VehicleInterface;
  startTime: Date;
  endTime: Date;
  routePath: object;
}