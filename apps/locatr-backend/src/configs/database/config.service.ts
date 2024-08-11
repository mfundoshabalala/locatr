import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { User } from '@migrations/user/entities/user.entity';
import { Vehicle } from '@migrations/vehicle/entities/vehicle.entity';
import { Client } from '@migrations/client/entities/client.entity';
import { Contact } from '@migrations/contact/entities/contact.entity';
import { Employee } from '@migrations/employee/entities/employee.entity';
import { Industry } from '@migrations/industry/entities/industry.entity';
import { Role } from '@migrations/role/entities/role.entity';
import { Site } from '@migrations/site/entities/site.entity';
import { Trip } from '@migrations/trip/entities/trip.entity';
import { Order } from '@migrations/order/entities/order.entity';
import { Route } from '@migrations/route/entities/route.entity';
import { Notification } from '@migrations/notification/entities/notification.entity';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isProduction = process.env.NODE_ENV === 'production';
    const sourcePath = isProduction ? 'dist' : 'apps/locatr-backend/src';

    return {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST'),
      port: +this.configService.get('POSTGRES_PORT'),
      username: this.configService.get('POSTGRES_USER'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      database: this.configService.get('POSTGRES_DATABASE'),
      // migrations: [join(__dirname, `../../../${sourcePath}/migrations/*{.ts,.js}`)],
      // entities: [join(__dirname, `../../../${sourcePath}/modules/**/*.entity{.ts,.js}`)],
      entities: [User, Vehicle, Client, Contact, Employee, Industry, Role, Site, Trip, Notification, Order, Route],
      // synchronize: !isProduction,
      synchronize: true,
      migrationsRun: true,
      autoLoadEntities: true,
      logging: !isProduction,
    };
  }
}
