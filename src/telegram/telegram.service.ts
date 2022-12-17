import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule/dist';
import { InjectBot } from 'nestjs-telegraf';
import { toBuffer } from 'qrcode';
import { Readable } from 'stream';
import { Context, Telegraf } from 'telegraf';
import { QrCodeData } from './telegram.dto';

@Injectable()
export class TelegramService {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  async submitApplication(chatId: string, qrCodeData: QrCodeData) {
    await this.bot.telegram.sendMessage(
      chatId,
      'Спасибо, что оставили заявку на экспресс кредит. Вы получите результат предварительного решения в течении 5 минут!',
    );

    this.schedulerRegistry.addTimeout(
      `qr_generation_${chatId}_${Date.now()}`,
      setTimeout(() => {
        toBuffer(qrCodeData.applicationId, async (_, code) => {
          await this.bot.telegram.sendPhoto(chatId, {
            source: Readable.from(code),
          });

          await this.bot.telegram.sendMessage(
            chatId,
            'Поздравляем!🥳 Ваша заявка на кредит предварительно одобрена! Приходите в отделение банка и покажите этот QR код сотруднику',
          );
        });
      }, 2 * 60_000),
    );
  }
}
