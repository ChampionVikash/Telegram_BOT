const axios = require('axios');
const { Telegraf } = require('telegraf');

const ApiKey = import.meta.env.KEY;
let fun = `Why did the egg hide? It was a little chicken.`;
const bot = new Telegraf(ApiKey);

bot.start((ctx) => ctx.reply('WELCOME TO HAPPY CLUB , PLEASE LAUGH HA HA HA !'));
bot.command('fun', (ctx) => ctx.reply(fun));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.command('book.js', async function (ctx) {
 const response = await axios.get('URL');
 console.log(response.data);
 return ctx.reply(response.data);
})

bot.launch();   