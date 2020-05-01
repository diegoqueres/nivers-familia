const bot = require('./telegram-bot');
const queries = require('./queries')
const BOT_TOKEN = '1043066793:AAHoO6vd941IIMsxRkqMfh3N9Dg0QiMXdcI';
const CANAL = '-1001368283905'; 

(async () => {
    //Initializing alerts...
    bot.initialize(BOT_TOKEN);
    await queries.initialize();
    let birthdays = await queries.getDayBirthdays();
    
    await bot.sendMessage(CANAL, `Teste do Heroku Scheduler: ` + birthdays);

})();