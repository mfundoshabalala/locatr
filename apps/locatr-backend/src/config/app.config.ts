import { INestApplication } from '@nestjs/common';

export class AppConfigService {
  getPort(): number {
    return parseInt(process.env.PORT || '3000') ;
  }

  getHost(): string {
    return process.env.HOST || '0.0.0.0';
  }

  setupGlobalPrefix(app: INestApplication) {
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
  }

  getLaunchMessage(port: number): string {
    const isProduction = process.env.NODE_ENV === 'production';
    return `🚀 Application is running on: ${
      isProduction ? `${port}/api` : `http://localhost:${port}/api`
    }`;
  }
}
