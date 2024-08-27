import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors } from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.siteService.create(createSiteDto);
  }

  @Get()
  findAll() {
    return this.siteService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.siteService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.siteService.update(id, updateSiteDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.siteService.remove(id);
  }
}
