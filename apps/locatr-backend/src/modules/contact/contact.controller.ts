import { Controller, Get, Post, Body, Patch, Delete, Query, UseInterceptors } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { CurrentUserInterceptor } from 'src/middleware';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @UseInterceptors(CurrentUserInterceptor)
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch()
  @UseInterceptors(CurrentUserInterceptor)
  update(@Query('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(id, updateContactDto);
  }

  @Delete()
  remove(@Query('id') id: string) {
    return this.contactService.remove(id);
  }
}
