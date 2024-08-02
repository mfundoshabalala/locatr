import { DeleteResult, UpdateResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';

import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { CurrentUserInterceptor } from '@middleware/index';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createClientDto: CreateClientDto): Promise<Client> {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Client | null> {
    return this.clientService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(CurrentUserInterceptor)
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto): Promise<Client> {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.clientService.remove(id);
  }
}
