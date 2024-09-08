import { INestApplication } from '@nestjs/common';

export class CorsConfigService {
  setupCors(app: INestApplication) {
    const isProduction = process.env.NODE_ENV === 'production';
    app.enableCors({
      origin: isProduction ? process.env.CORS_ORIGIN : 'http://localhost:4200',
      credentials: true, // Allow sending credentials (cookies, authorization headers)
    });
  }
}
