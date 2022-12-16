import { Update, Ctx, On, Start, Action } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import * as fs from 'fs';
import { replyMarkup } from './telegram.buttons';

@Update()
export class TelegramUpdate {
  @Start()
  async startCommand(ctx: Context) {
    console.log('starts bot');
    await ctx.reply(`Привет ${ctx.message.from.first_name}!`);
    const messageMd = await fs.readFileSync('hello.md', 'utf-8');
    await ctx.replyWithHTML(messageMd, replyMarkup);
    console.log(ctx.from.id);
    //await this.appService.runTimer(ctx);
  }

  @Action('security')
  async getOffer(ctx: Context) {
    console.log('Security');
    await ctx.telegram
      .sendDocument(ctx.from.id, {
        source: 'politics.pdf',
        filename: 'Политика обработки данных.pdf',
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  @Action('about')
  async getAboutInfo(ctx: Context) {
    console.log('about');
    await ctx.telegram
      .sendMessage(
        ctx.from.id,
        'Тут должна быть информация о боте',
        replyMarkup,
      )
      .catch(function (error) {
        console.log(error);
      });
  }
}
