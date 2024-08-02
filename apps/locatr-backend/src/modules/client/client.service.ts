import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Site } from '@migrations/site/entities/site.entity';
import { Contact } from '@migrations/contact/entities/contact.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
    @InjectRepository(Site) private siteRepository: Repository<Site>
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientRepository.save(createClientDto);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find();
  }

  async findOne(id: string): Promise<Client | null> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.clientRepository.delete(id);
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }

    if (updateClientDto.contact?.name) {
      const existingContact = await this.contactRepository.findOne({ where: { name: updateClientDto.contact.name } });
      if (existingContact && existingContact.id !== client.contact.id) {
        throw new ConflictException(`Contact name "${updateClientDto.contact.name}" already exists`);
      }
    }

    if (updateClientDto.site?.name) {
      const existingSite = await this.siteRepository.findOne({ where: { name: updateClientDto.site.name } });
      if (existingSite && existingSite.id !== client.site.id) {
        throw new ConflictException(`Site name "${updateClientDto.site.name}" already exists`);
      }
    }

    Object.assign(client, updateClientDto);

    try {
      return await this.clientRepository.save(client, { reload: true, transaction: true });
    } catch (error: any) {
      if ((error as any).code === '23505') { // PostgreSQL unique violation error code
        throw new ConflictException('Duplicate key value violates unique constraint');
      }
      throw new Error(error.message);
    }
  }
}
