import { Controller, Get, Post, Body, Patch, Query, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IndustryService } from './industry.service';
import { CreateIndustryDto } from './dto/create-industry.dto';
import { UpdateIndustryDto } from './dto/update-industry.dto';

@ApiTags('industry')
@Controller('industry')
export class IndustryController {
  constructor(private readonly industryService: IndustryService) {}

  @Post()
  create(@Body() createIndustryDto: CreateIndustryDto) {
    return this.industryService.create(createIndustryDto);
  }

  @Get()
  findAll() {
    return this.industryService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.industryService.findOne(+id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() updateIndustryDto: UpdateIndustryDto) {
    return this.industryService.update(+id, updateIndustryDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.industryService.remove(+id);
  }
}
