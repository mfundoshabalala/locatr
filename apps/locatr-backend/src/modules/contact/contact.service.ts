import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) {}

  create(createContactDto: CreateContactDto) {
    return this.contactRepository.save(createContactDto);
  }

  findAll() {
    return this.contactRepository.find();
  }

  findOne(id: string) {
    return this.contactRepository.findOne({ where: { id } });
  }

  update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactRepository.update(id, updateContactDto);
  }

  remove(id: string) {
    return this.contactRepository.delete(id);
  }
}
