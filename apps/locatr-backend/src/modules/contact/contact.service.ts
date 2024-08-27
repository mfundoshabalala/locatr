import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ContactEntity } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(@InjectRepository(ContactEntity) private contactRepository: Repository<ContactEntity>) {}

  create(createContactDto: CreateContactDto) {
    const contact = this.contactRepository.create(createContactDto);
    return this.contactRepository.save(contact);
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: string) {
    return this.contactRepository.findOne({ where: { id } });
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    await this.contactRepository.update(id, updateContactDto);
    return this.contactRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.contactRepository.delete(id);
  }
}
