import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(@InjectRepository(Client) private clientRepository: Repository<Client>) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientRepository.save(createClientDto);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOne(id: string): Promise<Client | null> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<UpdateResult> {
    return this.clientRepository.update(id, updateClientDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.clientRepository.delete(id);
  }
}
