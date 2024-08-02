import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, IsArray, ValidateNested } from 'class-validator';

import { CreateSiteDto } from '@migrations/site/dto/create-site.dto';
import { CreateContactDto } from '@migrations/contact/dto/create-contact.dto';

export class CreateClientDto {
  @IsOptional()
  @IsString()
  id?: string;

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

  @ValidateNested()
  @Type(() => CreateContactDto)
  @IsNotEmpty()
  contact!: CreateContactDto;

  @ValidateNested()
  @Type(() => CreateSiteDto)
  @IsNotEmpty()
  site!: CreateSiteDto;
}
