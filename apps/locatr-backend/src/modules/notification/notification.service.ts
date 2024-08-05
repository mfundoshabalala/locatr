import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(@InjectRepository(Notification) private notificationRepository: Repository<Notification>) {}

  create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationRepository.save(createNotificationDto);
  }

  findAll(): Promise<Notification[]> {
    return this.notificationRepository.find();
  }

  findOne(id: string): Promise<Notification | null> {
    return this.notificationRepository.findOne({ where: { id } });
  }

  update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<UpdateResult> {
    return this.notificationRepository.update(id, updateNotificationDto);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.notificationRepository.delete(id);
  }
}
