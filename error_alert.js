const superagent = require('superagent'); 
let SLACK_BOT_CONFIG = null;

const error_alert = {
    initialize: (CONFIG) => {
        SLACK_BOT_CONFIG=CONFIG;
    },

    send: async (msg) => {
        const content = {
            'color': '#FF5733', 
            'channel': SLACK_BOT_CONFIG.channel, 
            'text': `*Erro ao rodar aplicação:* ${msg}`
        };

        await superagent
            .post(`https://hooks.slack.com/services/${SLACK_BOT_CONFIG.token}`)
            .send(content)
            .set('Accept', 'application/json')
            .then(res => {
            if (res.body.ok)
                console.log('Message has been set successfully!');
            })
            .catch(err => {
                console.log(err.message);  
            });

    }
}
module.exports = error_alert;