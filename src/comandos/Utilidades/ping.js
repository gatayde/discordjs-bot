const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ping",
        aliases: ['pingg']
    },
    run: async (bot, message, args) => {
        const ping = new Discord.MessageEmbed()
            .setDescription(`Ping do bot: ${bot.ws.ping}`)
            .setColor("RANDOM")

        message.channel.send(ping)
    }

}