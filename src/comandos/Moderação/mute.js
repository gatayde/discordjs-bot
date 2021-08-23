const Discord = require('discord.js');

module.exports = {
    config: {
        name: "mute",
        aliases: ['mutar', 'mutee'],
        description: "promover um peao",
        example: '!upowner @User#1000',
        usage: '!upowner <user>'
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('você não tem permissão pra isso não pingola!!');
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('você precisa mencionar um usuário para mutar.');
        if (member === message.member) return message.reply('você não pode se auto-mutar!');


        let role = message.guild.roles.cache.get('824263487139479562');

        let emoji = member.guild.emojis.cache.find(emoji => emoji.name === "nikecolombia");

        message.channel.send(`${emoji} | ${message.author} Usuário punido! Membro mutado com sucesso! 🤫`)
        member.roles.add(role).catch(console.error);
        message.delete({timeout: 10});
        
    }
}