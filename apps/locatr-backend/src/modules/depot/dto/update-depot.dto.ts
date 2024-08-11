import { PartialType } from '@nestjs/mapped-types';
import { CreateDepotDto } from './create-depot.dto';

export class UpdateDepotDto extends PartialType(CreateDepotDto) {}
