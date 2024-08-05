import { UpdateResult, DeleteResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity'; // Add this import

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  findAll(): Promise<Notification[]> {
    return this.notificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Notification | null> {
    return this.notificationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto): Promise<UpdateResult> {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.notificationService.remove(id);
  }
}
