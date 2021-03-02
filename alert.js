require('dotenv').config();

const bot = require('./telegram-bot');
const moment = require('moment');
const queries = require('./queries')
const errorAlert = require('./error_alert')
const BOT_TOKEN = process.env.BOT_TOKEN;
const CANAL = process.env.TELEGRAM_CHANNEL; 
const SLACK_BOT_CONFIG = {
    'channel': process.env.SLACK_BOT_CONFIG__CHANNEL,
    'token': process.env.SLACK_BOT_CONFIG__TOKEN
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
    process.exit(1);

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
