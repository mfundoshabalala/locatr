import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { Client } from 'src/modules/client/entities/client.entity';
import { Contact } from 'src/modules/contact/entities/contact.entity';
import { Depot } from 'src/modules/depot/entities/depot.entity';
import { Employee } from 'src/modules/employee/entities/employee.entity';
import { Industry } from 'src/modules/industry/entities/industry.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Route } from 'src/modules/route/entities/route.entity';
import { Site } from 'src/modules/site/entities/site.entity';
import { Trip } from 'src/modules/trip/entities/trip.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Vehicle } from 'src/modules/vehicle/entities/vehicle.entity';
import { Notification } from 'src/modules/notification/entities/notification.entity';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isProduction = process.env.NODE_ENV === 'production';
    const sourcePath = isProduction ? 'dist' : 'apps/locatr-backend/src';

    return {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // migrations: [join(__dirname, `../../../${sourcePath}/migrations/*{.ts,.js}`)],
      // entities: [join(__dirname, `../../../${sourcePath}/modules/**/*.entity{.ts,.js}`)],
      entities: [User, Vehicle, Client, Contact, Employee, Industry, Site, Trip, Notification, Order, Route, Depot],
      synchronize: !isProduction,
      // synchronize: true,
      migrationsRun: true,
      autoLoadEntities: true,
      logging: !isProduction,
      ssl: {
        rejectUnauthorized: false,
      },
    };
  }
}
