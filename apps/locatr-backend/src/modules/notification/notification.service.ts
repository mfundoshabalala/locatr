import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(@InjectRepository(NotificationEntity) private notificationRepository: Repository<NotificationEntity>) {}

  create(createNotificationDto: CreateNotificationDto): Promise<NotificationEntity> {
    const notification = this.notificationRepository.create(createNotificationDto);
    return this.notificationRepository.save(notification);
  }

  findAll(): Promise<NotificationEntity[]> {
    return this.notificationRepository.find();
  }

  findOne(id: string): Promise<NotificationEntity | null> {
    return this.notificationRepository.findOne({ where: { id } });
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    await this.notificationRepository.update(id, updateNotificationDto);
    return this.notificationRepository.findOne({ where: { id } });
  }

  remove(id: string): Promise<DeleteResult> {
    return this.notificationRepository.delete(id);
  }
}
