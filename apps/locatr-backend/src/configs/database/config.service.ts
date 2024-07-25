import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {
	constructor (private readonly configService: ConfigService) {
    console.log(__dirname + '/../../**/*.entity{.ts,.js}');
  }

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST'),
      port: +this.configService.get('POSTGRES_PORT'),
      username: this.configService.get('POSTGRES_USER'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      database: this.configService.get('POSTGRES_DATABASE'),
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true
    };
	}
}