import { ContactInterface } from "./contact.interface";
import { EmployeeInterface } from "./employee.interface";
import { UserRole, UserStatus } from "./enums";

export interface UserInterface {
  id?: string;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  employee: EmployeeInterface;
  contact: ContactInterface;
  status: UserStatus;
  role: UserRole;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}