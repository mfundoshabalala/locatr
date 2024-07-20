import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { PostgresConfigService } from './config';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';
import { PostgresConfigModule } from './config/database/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env', '.env.local'], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
    ClientModule,
    EmployeeModule,
    RoleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
