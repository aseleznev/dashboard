import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());

  const options = new DocumentBuilder()
    .setTitle('Boss Dashboard')
    .setDescription('The Boss Dashboard API description')
    .setVersion('1.0')
    .addBasicAuth({ type: 'http', scheme: 'basic' }, 'local')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);

  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
