import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { successRequestButtons } from './telegram.buttons';

@Injectable()
export class TelegramService {
  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }

  async runTimer(ctx: Context) {
    const userData = 'afdsdfsdjfhskjfhsdkjfghsjkdfh';
    // const img = QRCode.toDataURL(userData);
    ctx.sendMessage(
      'Спасибо, что оставили заявку на экспресс кредит. Вы получите результат предварительного решения в течении 5 минут!',
    );
    await setTimeout(async () => {
      console.log('Delayed for 10 second.');

      await ctx.sendPhoto(
        { source: './qr-code.png' },
        {
          caption:
            'Поздравляем!🥳 Ваша заявка на кредит предварительно одобрена! Приходите в отделение банка и покажите этот QR код сотруднику ',
        },
      );
    }, 5000);
  }
}
