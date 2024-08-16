import { EntityInterface } from "./enums";

export interface SiteInterface extends EntityInterface {
  name: string;
  description: string;
  active: boolean;
  address: string;
  latitude: number;
  longitude: number;
}
