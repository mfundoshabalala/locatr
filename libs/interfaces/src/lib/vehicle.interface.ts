export interface VehicleInterface {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  capacity: number;
  currentLocation?: string; // Optional field
}
