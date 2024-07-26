import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';

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
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
