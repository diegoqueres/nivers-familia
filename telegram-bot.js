const superagent = require('superagent'); 
let botToken = null;

const telegram_bot = {
  initialize: (token) => {
    botToken=token;
    console.log('Bot initialized.');
  },

  sendMessage: async(chatId, message) => {
    console.log(`Bot is sending message..`);
    
    await superagent
      .post(`https://api.telegram.org/bot${botToken}/sendMessage`)
      .send({ chat_id: `${chatId}`, text: message, parse_mode: 'Markdown' })
      .set('Accept', 'application/json')
      .then(res => {
        if (res.body.ok)
          console.log('Message has been set successfully!');
      })
      .catch(err => {
        console.log(err.message);  
      });

  },

}

module.exports = telegram_bot;