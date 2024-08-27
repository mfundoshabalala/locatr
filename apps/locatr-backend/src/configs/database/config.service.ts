import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { ConfigService } from '@nestjs/config';
import { ContactEntity } from 'src/modules/contact/entities/contact.entity';
import { DepotEntity } from 'src/modules/depot/entities/depot.entity';
import { EmployeeEntity } from 'src/modules/employee/entities/employee.entity';
import { Industry } from 'src/modules/industry/entities/industry.entity';
import { Injectable } from '@nestjs/common';
import { NotificationEntity } from 'src/modules/notification/entities/notification.entity';
import { OrderEntity } from 'src/modules/order/entities/order.entity';
import { RouteEntity } from 'src/modules/route/entities/route.entity';
import { SiteEntity } from 'src/modules/site/entities/site.entity';
import { TripEntity } from 'src/modules/trip/entities/trip.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { VehicleEntity } from 'src/modules/vehicle/entities/vehicle.entity';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isProduction = process.env.NODE_ENV === 'production';
    // const sourcePath = isProduction ? 'dist' : 'apps/locatr-backend/src';

    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      // migrations: [join(__dirname, `../../../${sourcePath}/migrations/*{.ts,.js}`)],
      // entities: [join(__dirname, `../../../${sourcePath}/modules/**/*.entity{.ts,.js}`)],
      entities: [UserEntity, VehicleEntity, ClientEntity, ContactEntity, EmployeeEntity, Industry, SiteEntity, TripEntity, NotificationEntity, OrderEntity, RouteEntity, DepotEntity],
      synchronize: !isProduction,
      migrationsRun: true,
      autoLoadEntities: true,
      logging: !isProduction,
      ssl: process.env.POSTGRES_SSL === 'true',  // Enable SSL
    };
  }
}
