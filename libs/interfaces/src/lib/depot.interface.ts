export interface DepotInterface {
  id?: string;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  capacity?: number;
  createdBy?: string;
  createdAt?: Date,
  updatedBy?: string;
  updatedAt?: Date;
}