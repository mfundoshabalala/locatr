import { ContactInterface } from "./contact.interface";
import { IndustryInterface } from "./industry.interface";
import { SiteInterface } from "./site.interface";

export class ClientInterface {
  id?: string;
  name!: string;
  hours?: string[];
  website?: string;
  notes?: string;
  isActive?: boolean;
  services?: string[];
  industryID?: string;
  industry!: IndustryInterface;
  contact!: ContactInterface;
  site!: SiteInterface;
}
