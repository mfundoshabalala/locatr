import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

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
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        port: +process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      defaults: {
        from: process.env.EMAIL_FROM,
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or other adapter
        options: {
          strict: true,
        },
      },
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
