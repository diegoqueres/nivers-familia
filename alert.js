const bot = require('./telegram-bot');
const moment = require('moment');
const queries = require('./queries')
const BOT_TOKEN = '1043066793:AAHoO6vd941IIMsxRkqMfh3N9Dg0QiMXdcI';
const CANAL = '-1001368283905'; 

(async () => {
    console.log("Alerts initilializing...");
    bot.initialize(BOT_TOKEN);

    console.log("Connecting to database...");
    await queries.initialize();

    console.log("Checking the day birthdays...");
    let birthdays = await queries.getDayBirthdays();
    
    if (birthdays.length > 0) {
        let todayDateStr = moment(new Date()).format("DD/MM");
        let msg = `🎂 Hoje temos *ANIVERSARIANTES* (${todayDateStr})🎂:\n`;
        for (let aniversariante of birthdays) {
            msg += `-${aniversariante.nome}\n`;
        }
        msg += "\nEnvie os *parabéns* assim que puder! 🎂🥳👏";

        await bot.sendMessage(CANAL, msg);

    }

    

    console.log("End of execution.");

})();


