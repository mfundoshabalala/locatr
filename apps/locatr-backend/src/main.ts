/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { AuthService } from './modules/auth/auth.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from this origin
    credentials: true, // Allow sending credentials (cookies, authorization headers)
    // allowedHeaders: 'Authorization, Content-Type',
    allowedHeaders: '*',
  });

  const authService = app.get(AuthService);
  app.use(new AuthMiddleware(authService).use);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
