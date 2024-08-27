import { Controller, Get, Post, Body, Patch, Query, Delete, UseInterceptors } from '@nestjs/common';
import { DepotService } from './depot.service';
import { CreateDepotDto } from './dto/create-depot.dto';
import { UpdateDepotDto } from './dto/update-depot.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@Controller('depot')
export class DepotController {
  constructor(private readonly depotService: DepotService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createDepotDto: CreateDepotDto) {
    return this.depotService.create(createDepotDto);
  }

  @Get()
  findAll() {
    return this.depotService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.depotService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateDepotDto: UpdateDepotDto) {
    return this.depotService.update(id, updateDepotDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.depotService.remove(id);
  }
}
