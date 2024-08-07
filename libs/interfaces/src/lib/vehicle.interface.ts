import { VehicleType } from "./enums";

export interface VehicleInterface {
  id: number;
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  licensePlate: string;
  capacity: number;
  currentLocation?: string; // Optional field
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
