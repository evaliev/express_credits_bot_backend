import { Update, Start, Action } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { readFile } from 'fs/promises';
import { replyMarkup } from './telegram.buttons';
import { createReadStream } from 'fs';

@Update()
export class TelegramUpdate {
  @Start()
  async startCommand(ctx: Context) {
    const messageMd = await readFile('hello.md', 'utf-8');
    const message = messageMd.replace(
      '{{username}}',
      `${ctx.message.from.first_name || ''} ${
        ctx.message.from.last_name || ''
      }`,
    );
    await ctx.replyWithHTML(message, replyMarkup);
  }

  @Action('security')
  async getOffer(ctx: Context) {
    await ctx.telegram.sendDocument(ctx.from.id, {
      source: createReadStream('politics.pdf'),
      filename: 'Политика обработки данных.pdf',
    });
  }

  @Action('about')
  async getAboutInfo(ctx: Context) {
    await ctx.telegram.sendMessage(
      ctx.from.id,
      'Тут должна быть информация о боте',
      replyMarkup,
    );
  }
}
