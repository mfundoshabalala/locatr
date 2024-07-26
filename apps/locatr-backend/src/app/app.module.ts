import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DBConfigService } from '../configs';
import { DBConfigModule } from '../configs/database/config.module';
import { AuthModule } from '../modules/auth/auth.module';
import { ClientModule } from '../modules/client/client.module';
import { EmployeeModule } from '../modules/employee/employee.module';
import { RoleModule } from '../modules/role/role.module';
import { UserModule } from '../modules/user/user.module';



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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
