const bot = require('./telegram-bot');
const BOT_TOKEN = '981005398:AAHBRZb420C5nmfQ8F5UZ4rMFWod2QSJT-0';
const CANAL_MT_TASKS_ALERT_ID = -1001169830477; 
const MINUTES_TO_CHECK = 3;

(async () => {
    //Initializing alerts...
    bot.initialize(BOT_TOKEN);
    await bot.sendMessage(CANAL_MT_TASKS_ALERT_ID, "Teste do Heroku Scheduler");
})();