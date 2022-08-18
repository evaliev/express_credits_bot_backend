import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const APP_PORT = config.get('APP_PORT') || 8080;

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  await app.listen(APP_PORT);
}

bootstrap();
