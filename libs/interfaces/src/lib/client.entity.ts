import { SiteEntity } from "./site.entity";
import { ContactEntity } from "./contact.entity";
import { IndustryEntity } from "./industry.entity";

export class ClientEntity {
  id?: string;
  name!: string;
  hours?: string[];
  website?: string;
  notes?: string;
  isActive?: boolean;
  services?: string[];
  industryID?: string;
  industry!: IndustryEntity;
  contact!: ContactEntity;
  site!: SiteEntity;
}
