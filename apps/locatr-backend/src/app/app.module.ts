import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { ClientModule } from './client/client.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ClientModule, UserModule, EmployeeModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
