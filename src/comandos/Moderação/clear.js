const Discord = require('discord.js');

module.exports = {
    config: {
        name: "clear",
        aliases: ['limpar'],
        description: "Limpe mensagens!",
        example: "m!clear 50",
        usage: 'm!clear <quantia>'
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('você é fraco!! precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("MANAGES_MESSAGES")) return message.reply('eu preciso de permissão para isso!');

        let quantia = args[0]
        if (!quantia) return message.reply('você precisa colocar uma quantidade!');
        if (isNaN(quantia)) return message.reply('você só pode colocar números!');

        if (parseInt(quantia) > 100 || parseInt(quantia) < 1) return message.reply('você só pode colocar um número de **1 a 100**');

        try {
            message.channel.bulkDelete(quantia);
            message.channel.send(`Foram deletadas ${quantia} mensagens pelo usuáro ${message.author}.`)
            message.delete
        } catch (err) {
            console.log(err);
            message.channel.send(`Ocorreu um erro ao limpar as mensagens!`)
        }
    }
}