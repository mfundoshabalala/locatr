import * as dotenv from 'dotenv';

import { AuthModule, AuthService, ClientModule, ContactModule, DepotModule, EmployeeModule, IndustryModule, NotificationModule, OrderModule, RouteModule, SiteModule, TripModule, UserModule, VehicleModule } from 'src/modules';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthMiddleware } from '../middleware';
import { ConfigModule } from '@nestjs/config';
import { DBConfigModule } from '../configs';
import { DBConfigService } from '../configs';
import { SentryModule } from '@sentry/nestjs/setup';
import { TypeOrmModule } from '@nestjs/typeorm';

dotenv.config();

@Module({
  imports: [
    SentryModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: ['.env.local','.env'], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [DBConfigModule],
      useClass: DBConfigService,
      inject: [DBConfigService],
    }),
    AuthModule,
    ClientModule,
    EmployeeModule,
    UserModule,
    SiteModule,
    ContactModule,
    IndustryModule,
    VehicleModule,
    TripModule,
    NotificationModule,
    OrderModule,
    RouteModule,
    DepotModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
