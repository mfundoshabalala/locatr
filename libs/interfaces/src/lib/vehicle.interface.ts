import { EntityInterface, VehicleType } from "./enums";

import { DepotInterface } from "./depot.interface";
import { UserInterface } from "./user.interface";

export interface VehicleInterface extends EntityInterface {
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  licensePlate: string;
  capacity: number;
  currentLocation?: DepotInterface; // Optional field
  driver?: UserInterface; // Optional field
}
