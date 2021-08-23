const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

module.exports = {
    config: {
        name: "avatar",
        aliases: ['avatarr'],
        description: 'Mostra o avatar de um usuario!',
        example: "!avatar @User#1000",
        usage: "!avatar <user>"
    },

    run: async (bot, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

        const embed = new Discord.MessageEmbed()
            .setTitle(`🖼 Avatar de ${user.username}`)
            .setColor("RANDOM")
            .setImage(avatar)
            .setFooter('🤍 Gamezada.')
        message.channel.send(embed)
    }
}


