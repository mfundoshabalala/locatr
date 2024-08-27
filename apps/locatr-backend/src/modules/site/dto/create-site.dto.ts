import { IsBoolean, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

import { ClientEntity } from "../../client/entities/client.entity";
import { Unique } from "typeorm";

export class CreateSiteDto {
  @IsOptional()
  @IsString()
  id?: string;

  @MinLength(4)
  @MaxLength(100)
  @IsString()
  @Unique(['name'])
  readonly name!: string;

  @IsString()
  @IsNotEmpty()
  readonly address!: string;

  @IsString()
  @IsNotEmpty()
  readonly latitude!: number;

  @IsString()
  @IsNotEmpty()
  readonly longitude!: number;

  @IsString()
  @IsNotEmpty()
  readonly type!: string;

  @IsBoolean()
  readonly active!: boolean;

  @IsString()
  readonly description!: string;

	@IsNotEmptyObject()
  @IsObject()
  readonly client!: ClientEntity;
}
