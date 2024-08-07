import { EntityInterface } from "./enums";
import { ContactInterface } from "./contact.interface";

export interface EmployeeInterface extends EntityInterface {
  firstName: string;
  lastName: string;
  position: string;
  department?: string;
  contact?: ContactInterface;
}
