import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
// entities
import { User } from './app/user/entities/user.entity';
import { Role } from './app/role/entities/role.entity';
import { Client } from './app/client/entities/client.entity';
import { Employee } from './app/employee/entities/employee.entity';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [Client, User, Employee, Role],
  synchronize: true, //FIXME: This is for development only
  logging: true,
  subscribers: [],
  migrations: [],
};

console.log('Type ORM Config', config);

export default config;
