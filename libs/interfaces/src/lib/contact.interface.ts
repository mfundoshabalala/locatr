import { EntityInterface } from "./enums";

export interface ContactInterface extends EntityInterface {
  name: string;
  email: string;
  phone: string;
}
