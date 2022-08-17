import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const APP_PORT = config.get('APP_PORT') || 4000;

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  await app.listen(APP_PORT);
}

bootstrap();
