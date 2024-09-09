import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { SentryModule } from '@sentry/nestjs/setup';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from 'src/core/auth/auth.module';
import { AuthService } from 'src/core/auth/auth.service';
import { UserModule } from 'src/core/user/user.module';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { ClientModule, ContactModule, DepotModule, EmployeeModule, IndustryModule, NotificationModule, OrderModule, RouteModule, SiteModule, TripModule, VehicleModule } from 'src/modules';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MetadataInterceptor } from 'src/middleware';

@Module({
  imports: [
    SentryModule.forRoot(),
    ConfigModule.forRoot({ envFilePath: ['.env.local', '.env'], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => typeOrmConfig(configService),
      inject: [ConfigService],
    }),
    AuthModule,
    ClientModule,
    ContactModule,
    DepotModule,
    EmployeeModule,
    IndustryModule,
    NotificationModule,
    OrderModule,
    RouteModule,
    SiteModule,
    TripModule,
    UserModule,
    VehicleModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, {
    provide: APP_INTERCEPTOR,
    useClass: MetadataInterceptor,
  }
  ]
})
export class AppModule {}
