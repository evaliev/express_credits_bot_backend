import { Update, Ctx, Hears, Start } from 'nestjs-telegraf';

@Update()
export class TelegramUpdate {
  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Напиши мне, чтобы узнать статус заявки');
  }

  @Hears(/статус|заявк/i)
  async hears(@Ctx() ctx) {
    const emoji = new Array(3).fill(String.fromCodePoint(0x1f618)).join('');

    await ctx.reply(
      `Заявка №1 от 01.01.2023 одобрена. Добро пожаловать в мир кабалы ${emoji}`,
    );
  }
}
