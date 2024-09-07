/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import "./instrument.ts";

import * as dotenv from 'dotenv';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Locatr')
  .setDescription('Locatr API Documentation')
  .setVersion('1.0.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const isProduction = process.env.NODE_ENV === 'production';

  app.enableCors({
    origin: isProduction ? process.env.CORS_ORIGIN : 'http://localhost:4200',
    credentials: true, // Allow sending credentials (cookies, authorization headers)
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || '0.0.0.0';
  await app.listen(port, host);
  // Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`🚀 Application is running on: ${ isProduction ? port + '/' + globalPrefix : 'http://localhost:3000/api' }`);
}

bootstrap();
