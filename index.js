const {
    Client,
    Collection
} = require('discord.js');

const bot = new Client();
const config = require('./config.json');
const disbut = require('discord-buttons');
disbut(bot);
const Discord = require('discord.js');

["commands", "aliases"].forEach(x => bot[x] = new Collection());
["comandos", "eventos"].forEach(x => require(`./src/handlers/${x}`)(bot));

// Suggestion System 👇
bot.on('message', msg => {
    if(msg.channel.id != "863826088424767539") return
    if(msg.author.bot || msg.channel.type == 'dm') return

    msg.delete({timeout:100})
    const embedSug = new Discord.MessageEmbed()
        .setTitle(`*SUGGESTION*`)
        .setDescription(msg.content)
        .setTimestamp()

    msg.channel.send(embedSug).then(sentMessage =>
        sentMessage.react('✔')).then(reaction => reaction.message.react ('❌'));
})
// End





bot.login(config.token);








