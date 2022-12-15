import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './logger/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TelegramUpdate } from './telegram/telegram.update';
import { TelegrafModule } from 'nestjs-telegraf';
import { telegramSessionMiddleware } from './telegram/telegram.middleware';
import { ApplicationModule } from './application/application.module';
import {
  GoogleRecaptchaModule,
  GoogleRecaptchaNetwork,
} from '@nestlab/google-recaptcha';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres' as const,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    GoogleRecaptchaModule.forRoot({
      secretKey: process.env.RECAPTCHA_SECRET_KEY,
      response: (req) => req.body.reCaptchaToken,
      network: GoogleRecaptchaNetwork.Recaptcha,
    }),
    // TelegrafModule.forRoot({
    //   token: process.env.TELEGRAM_BOT_TOKEN,
    //   middlewares: [telegramSessionMiddleware],
    // }),
    TelegramUpdate,
    AuthModule,
    ApplicationModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
