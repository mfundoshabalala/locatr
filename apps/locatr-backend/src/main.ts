/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import "./instrument.ts";
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const isProduction = process.env.NODE_ENV === 'production';

  app.enableCors({
    origin: isProduction ? process.env.CORS_ORIGIN : 'http://localhost:4200',
    credentials: true, // Allow sending credentials (cookies, authorization headers)
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  // Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log(`🚀 Application is running on: ${ isProduction ? process.env.LOCATR_API_URL : 'http://localhost:3000' }/${globalPrefix}`);
}

bootstrap();
