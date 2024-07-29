import { Contact } from '@migrations/contact/entities/contact.entity';
import { Site } from '@migrations/site/entities/site.entity';
import { IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, IsArray, IsObject } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  businessHours?: string[];

  @IsOptional()
  @IsUrl()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  services?: string[];

  @IsNotEmpty()
  @IsString()
  status!: string;

  @IsUUID()
  @IsNotEmpty()
  industryID!: string;

  @IsObject()
  @IsNotEmpty()
  contact!: Contact;

  @IsObject()
  @IsNotEmpty()
  site!: Site;
}
