import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './logger/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CreditApplicationModule } from './credit-application/credit-application.module';
import { AuthModule } from './auth/auth.module';
import { UserInfoModule } from './user-info/user-info.module';
import { TelegramUpdate } from './telegram/telegram.update';
import { TelegrafModule } from 'nestjs-telegraf';
import { telegramSessionMiddleware } from './telegram/telegram.middleware';

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
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN,
      middlewares: [telegramSessionMiddleware],
    }),
    TelegramUpdate,
    UserModule,
    CreditApplicationModule,
    AuthModule,
    UserInfoModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
