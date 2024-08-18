import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl, IsUUID, IsArray, ValidateNested, IsObject } from 'class-validator';
import { CreateContactDto } from 'src/modules/contact/dto/create-contact.dto';
import { CreateSiteDto } from 'src/modules/site/dto/create-site.dto';


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

  @ValidateNested()
  @Type(() => CreateContactDto)
  @IsNotEmpty()
  contact!: CreateContactDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSiteDto)
  sites?: CreateSiteDto[];

  @IsNotEmpty()
  @IsString()
  status!: string;

  @IsUUID()
  @IsNotEmpty()
  industryID!: string;
}
