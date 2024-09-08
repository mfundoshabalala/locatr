import { UpdateResult, DeleteResult } from 'typeorm';
import { Controller, Get, Post, Body, Patch, Query, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEntity } from './entities/notification.entity'; // Add this import

@ApiTags('notification')
@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto): Promise<NotificationEntity> {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  findAll(): Promise<NotificationEntity[]> {
    return this.notificationService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string): Promise<NotificationEntity | null> {
    return this.notificationService.findOne(id);
  }

  @Patch()
  update(@Query('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(id, updateNotificationDto);
  }

  @Delete()
  remove(@Query('id') id: string): Promise<DeleteResult> {
    return this.notificationService.remove(id);
  }
}
