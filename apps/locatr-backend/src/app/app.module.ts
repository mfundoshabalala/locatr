import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DBConfigService } from '../configs';
import { DBConfigModule } from '../configs/database/config.module';
import { AuthModule } from '../modules/auth/auth.module';
import { ClientModule } from '../modules/client/client.module';
import { EmployeeModule } from '../modules/employee/employee.module';
import { RoleModule } from '../modules/role/role.module';
import { UserModule } from '../modules/user/user.module';


import { AuthMiddleware } from '@middleware/index';
import { DBConfigModule, DBConfigService } from '@config/index';

import { AuthModule } from '@migrations/auth/auth.module';
import { AuthService } from '@migrations/auth/auth.service';
import { ClientModule } from '@migrations/client/client.module';
import { ContactModule } from '@migrations/contact/contact.module';
import { EmployeeModule } from '@migrations/employee/employee.module';
import { IndustryModule } from '@migrations/industry/industry.module';
import { RoleModule } from '@migrations/role/role.module';
import { SiteModule } from '@migrations/site/site.module';
import { UserModule } from '@migrations/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [DBConfigModule],
      useClass: DBConfigService,
      inject: [DBConfigService],
    }),
    ClientModule,
    EmployeeModule,
    RoleModule,
    UserModule,
    SiteModule,
    ContactModule,
    IndustryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
