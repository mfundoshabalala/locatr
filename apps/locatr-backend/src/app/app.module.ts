import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DBConfigModule } from '@config/database/config.module';
import { DBConfigService } from '@config/database/config.service';
import { AuthMiddleware } from '@middleware/index';
import {
  AuthModule,
  ClientModule,
  EmployeeModule,
  RoleModule,
  UserModule,
  SiteModule,
  ContactModule,
  IndustryModule,
  VehicleModule,
  TripModule,
  AuthService
} from '@migrations/index';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [DBConfigModule],
      useClass: DBConfigService,
      inject: [DBConfigService],
    }),
    AuthModule,
    ClientModule,
    EmployeeModule,
    RoleModule,
    UserModule,
    SiteModule,
    ContactModule,
    IndustryModule,
    VehicleModule,
    TripModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
