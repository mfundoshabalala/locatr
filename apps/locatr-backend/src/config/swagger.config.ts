import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfigService {
  setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Locatr')
      .setDescription('Locatr API Documentation')
      .setVersion('1.0.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
