import { DeleteResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Delete, UseInterceptors, Query } from '@nestjs/common';

import { ClientService } from './client.service';
import { ClientEntity } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { CurrentUserInterceptor } from 'src/middleware';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createClientDto: CreateClientDto): Promise<ClientEntity> {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll(): Promise<ClientEntity[]> {
    return this.clientService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<ClientEntity | null> {
    return this.clientService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<ClientEntity> {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.clientService.remove(id);
  }
}
