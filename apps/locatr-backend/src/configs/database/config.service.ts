import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const isProduction = process.env.NODE_ENV === 'production';
    const sourcePath = isProduction ? 'dist' : 'src';

    return {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST'),
      port: +this.configService.get('POSTGRES_PORT'),
      username: this.configService.get('POSTGRES_USER'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      database: this.configService.get('POSTGRES_DATABASE'),
      migrations: [join(__dirname, `../../${sourcePath}/migrations/*{.ts,.js}`)],
      entities: [join(__dirname, `../../${sourcePath}/modules/**/*.entity{.ts,.js}`)],
      synchronize: isProduction ? false : true,
      migrationsRun: true,
      autoLoadEntities: true,
    };
  }
}
