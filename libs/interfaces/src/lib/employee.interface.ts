import { ContactInterface } from "./contact.interface";

export interface EmployeeInterface {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  department?: string;
  contact?: ContactInterface;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy?: string;
}
