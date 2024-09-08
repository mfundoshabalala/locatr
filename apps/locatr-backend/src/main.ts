import "./instrument.ts";

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppConfigService } from "./config/app.config";
import { CorsConfigService } from "./config/cors.config";
import { SwaggerConfigService } from "./config/swagger.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfigService = new SwaggerConfigService();
  swaggerConfigService.setupSwagger(app);

  const corsConfigService = new CorsConfigService();
  corsConfigService.setupCors(app);

  const appConfigService = new AppConfigService();
  appConfigService.setupGlobalPrefix(app);

  const port = appConfigService.getPort();
  const host = appConfigService.getHost();

  await app.listen(port, host);

  Logger.log(appConfigService.getLaunchMessage(port));
}

bootstrap();
