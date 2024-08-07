import { ContactInterface } from "./contact.interface";
import { EmployeeInterface } from "./employee.interface";
import { EntityInterface, UserRole, UserStatus } from "./enums";

export interface UserInterface extends EntityInterface {
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  employee: EmployeeInterface;
  contact: ContactInterface;
  status: UserStatus;
  role: UserRole;
}