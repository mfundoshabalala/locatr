import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DBConfigService } from './configs/database/config.service';

config();

console.log(__dirname);

const configService = new ConfigService();
const dbConfigService = new DBConfigService(configService);

const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: +configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DATABASE'),
  entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: true,
});

export default dataSource;
