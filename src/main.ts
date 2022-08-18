import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const APP_PORT = config.get('APP_PORT') || 8080;

  setUpSwagger(app);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  await app.listen(APP_PORT);
}

function setUpSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('КПК')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);
}
