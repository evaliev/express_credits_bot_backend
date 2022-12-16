import { Update, Ctx, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class TelegramUpdate {
  @On('web_app_data')
  async onWebAppData(@Ctx() ctx: Context) {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 15000);
    });

    const webAppData: any = await ctx.webAppData.data.json();

    await ctx.reply(JSON.stringify(webAppData?.applicationId));
  }
}
