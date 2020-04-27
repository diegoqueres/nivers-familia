const bot = require('./telegram-bot');
const BOT_TOKEN = '';
const CANAL_MT_TASKS_ALERT_ID = null; 

(async () => {
    //Initializing alerts...
    bot.initialize(BOT_TOKEN);
    await bot.sendMessage(CANAL_MT_TASKS_ALERT_ID, "Teste do Heroku Scheduler");
})();