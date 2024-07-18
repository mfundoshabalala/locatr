import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ClientModule } from './client/clients.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ClientModule, UserModule, EmployeeModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
