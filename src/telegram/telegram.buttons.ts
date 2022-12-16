/* eslint-disable prettier/prettier */
import { Markup } from 'telegraf';

export function actionButtons() {
  return Markup.keyboard(
    [
      Markup.button.webApp(
        'Получить экспресс кредит',
        'https://evaliev.github.io/loan_web_app_bot/',
      ),
      Markup.button.callback('getoffer', 'getoffer', false),
    ],
    { columns: 2 },
  );
}

export function successRequestButtons() {
  return Markup.inlineKeyboard([
    Markup.button.webApp('Узнать статус заявки', 'status'),
  ]);
}

export const markup = {
  inline_keyboard: [
    /* Inline buttons. 2 side-by-side */
    [
      { text: 'Button 1', callback_data: 'btn-1' },
      { text: 'Button 2', callback_data: 'btn-2' },
    ],

    /* One button */
    [{ text: 'Next', callback_data: 'next' }],

    /* Also, we can have URL buttons. */
    [{ text: 'Open in browser', url: 'telegraf.js.org' }],
  ],
};

export const replyMarkup = {
  reply_markup: {
    inline_keyboard: [
      /* Inline buttons. 2 side-by-side */
      [
        {
          text: 'Получить кредит',
          web_app: {
            url: 'https://smartbinary.ru',
          },
        },
        { text: 'Про бота', callback_data: 'about' },
      ],

      /* One button */
      [{ text: 'Политика безопасности', callback_data: 'security' }],
    ],
  },
};
