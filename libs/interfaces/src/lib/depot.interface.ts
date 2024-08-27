export interface DepotInterface {
  id?: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  capacity?: number;
  createdBy?: string;
  createdAt?: Date,
  updatedBy?: string;
  updatedAt?: Date;
}