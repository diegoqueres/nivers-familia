const bot = require('./telegram-bot');
const moment = require('moment');
const queries = require('./queries')
const errorAlert = require('./error_alert')
const BOT_TOKEN = '1043066793:AAHoO6vd941IIMsxRkqMfh3N9Dg0QiMXdcI';
const CANAL = '-1001368283905'; 
const SLACK_BOT_CONFIG = {
    'channel': '#nivers-familia-mota',
    'token': 'T0123M3R7B9/B012Y6X8DT4/vZfHTa2HNJ4YZqfhEaz8vm8n'
};

(async () => {
    console.log("Initilializing alert application...");

    try {
        console.log("Alerts initilializing...");
        bot.initialize(BOT_TOKEN);
        
        console.log("Connecting to database...");
        await queries.initialize();

        console.log("Checking the day birthdays...");
        let birthdays = await queries.getDayBirthdays();
        
        if (birthdays.length > 0) {
            console.log("There is birthdays today!! I will send telegram alert!");
            let msg = getBithdayMessage(birthdays);
            await bot.sendMessage(CANAL, msg);

            console.log("Telegram alert has been sent!");

        } else {
            console.log("There isn't birthdays today :-(!");

        }

    } catch (err){
        errorAlert.initialize(SLACK_BOT_CONFIG);
        console.log(`Error ocurred during execution: ${err}`);
        errorAlert.send(err);
    }

    console.log("End of execution.");

})();

function getBithdayMessage(birthdays) {
    let todayDateStr = moment(new Date()).format("DD/MM");
    let msg = `🎂 Hoje temos *ANIVERSARIANTES* (${todayDateStr})🎂:\n`;
    for (let birthdayPerson of birthdays) {
        msg += `-${birthdayPerson.nome}\n`;
    }
    msg += "\nEnvie os seus *parabéns*! 🎂🥳👏";
    return msg;
}
