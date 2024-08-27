import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { ClientEntity } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ContactEntity } from '../contact/entities/contact.entity';
import { SiteEntity } from '../site/entities/site.entity';
@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>,
    @InjectRepository(ContactEntity) private contactRepository: Repository<ContactEntity>,
    @InjectRepository(SiteEntity) private siteRepository: Repository<SiteEntity>
  ) {}

  async create(createClientDto: CreateClientDto): Promise<ClientEntity> {
    const client = this.clientRepository.create(createClientDto);
    return this.clientRepository.save(client);
  }

  async findAll(): Promise<ClientEntity[]> {
    return this.clientRepository.find();
  }

  async findOne(id: string): Promise<ClientEntity | null> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.clientRepository.delete(id);
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<ClientEntity> {
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
