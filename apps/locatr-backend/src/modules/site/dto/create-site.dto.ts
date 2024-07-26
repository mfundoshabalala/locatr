import { Unique } from "typeorm";
import { IsBoolean, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, MaxLength, MinLength } from "class-validator";

import { Client } from "../../client/entities/client.entity";

export class CreateSiteDto {
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
  readonly client!: Client;
}
