const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

module.exports = {
    config: {
        name: "servericon",
        aliases: ['server-icon'],
        description: 'Mostra o icone do servidor!',
        example: "!servericon",
        usage: "!servericon"
    },

    run: async (bot, message, args) => {


        const embed = new Discord.MessageEmbed()
            .setTitle(`🖼 Ícone do servidor`)
            .setColor("RANDOM")
            .setImage(message.guild.iconURL({ dynamic: true }))
            .setFooter('🤍 mama.')
        message.channel.send(embed)
    }
}