const Discord = require('discord.js');

module.exports = {
    config: {
        name: "ban",
        aliases: ['banir', 'dar-ban'],
        description: "Bana um membro",
        example: '/ban @User#1000',
        usage: '/ban <user>'
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!member) return message.reply('você precisa mencionar um usuário.');
            if (member === message.member) return message.reply('você não pode se banir!');

        let motivo = args.slice(1).join(" ");
            if (!motivo) return message.reply('você precisa especificar um motivo.');
            message.delete({timeout: 10});

        const embed = new Discord.MessageEmbed()
        .setTitle('BANIMENTO')
        .setColor("#2F3136")
        .setThumbnail(`https://media.tenor.com/images/d7afc6b3fe2611147e080f2bdf6e9957/tenor.gif`, ({ dynamic: true }))
        .setDescription(`**Membro:** ${member}\n**Motivo:** ${motivo}\n\n Caso você ache que a punição foi aplicada incorretamente, senta e chora.`)
        .setFooter('Gamezada © 2021', bot.user.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed);
        member.ban();

        
    }
}


