const {
    readdirSync
} = require('fs');

module.exports = (bot) => {

    const load = dirs => {

        const events = readdirSync(`./src/eventos/${dirs}/`).filter(d => d.endsWith('.js'));

        for (let file of events) {
            const event = require(`../eventos/${dirs}/${file}`);
            let eventName = file.split(".")[0];
            bot.on(eventName, event.bind(null, bot));
        };
    };
    readdirSync(`./src/eventos/`).forEach(x => load(x));
}; 