import { EntityInterface } from "./enums";
import { SiteInterface } from "./site.interface";
import { OrderInterface } from "./order.interface";
import { ContactInterface } from "./contact.interface";
import { IndustryInterface } from "./industry.interface";

export interface ClientInterface extends EntityInterface {
  id?: string;
  name: string;
  hours?: string[];
  website?: string;
  notes?: string;
  isActive: boolean;
  services?: string[];
  industryID?: string;
  industry: IndustryInterface;
  contact: ContactInterface;
  sites: SiteInterface[];
  orders?: OrderInterface[];
}
