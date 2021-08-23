const Discord = require('discord.js');
const moment = require('moment');
moment.updateLocale('pt-BR');

module.exports = {
    config: {
        name: "serverinfo",
        aliases: ['server-info'],
        description: "Mostra as informações do servidor local!",
        example: "/serverinfo",
        usage: '/serverinfo'
    },
    run: async (bot, message, args) => {
        let membros = message.guild.members.cache
        let emojis = message.guild.emojis.cache
        let texto = message.guild.channels.cache.filter(ch => ch.type === 'text')
        let voz = message.guild.channels.cache.filter(bh => bh.type === 'voice')

        const embed = new Discord.MessageEmbed()
        .setTitle(`INFOS DO SERVIDOR ${message.guild.name}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField(`Nome:`, `${message.guild.name}`)
        .addField(`ID:`, `${message.guild.id}`)
        .addField(`Membros:`, `${message.guild.memberCount}`)
        .addField(`Criação:`, `${moment(message.guild.createdTimestamp).format('ll')}`)
        .addField(`Humano:`, `${membros.size}`)/*filter(member => !member.user.bot).size + (member => member.user.bot).size}*/
        .addField(`Bots:`, `${membros.filter(member => member.user.bot).size}`)
        .addField(`Emojis:`, `${emojis.size}`)
        .addField(`Canais de Texto:`, `${texto.size}`)
        .addField(`Canais de Voz:`, `${voz.size}`)

        message.channel.send(embed)
    }
}
