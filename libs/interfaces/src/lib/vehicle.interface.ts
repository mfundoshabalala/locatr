import { EntityInterface, VehicleType } from "./enums";

export interface VehicleInterface extends EntityInterface {
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  licensePlate: string;
  capacity: number;
  currentLocation?: string; // Optional field
}
