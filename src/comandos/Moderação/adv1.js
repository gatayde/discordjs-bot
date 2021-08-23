const Discord = require('discord.js');

module.exports = {
    config: {
        name: "adv1",
        aliases: ['adv1', 'advertir1'],
        description: "Advertir um membro",
        example: '!adv1 @User#1000',
        usage: '!adv1 <user>'
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('você precisa mencionar um usuário.');
        if (member === message.member) return message.reply('você não pode se auto-advertir!');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('você precisa especificar um motivo.');
        message.delete({timeout: 10});

        let canal = message.guild.channels.cache.get('814816443543715891'); 

        let role = message.guild.roles.cache.get('755453065288614020');

        const embed = new Discord.MessageEmbed()
            .setTitle('PUNIÇÃO')
            .setColor("#2F3136")
            .setThumbnail(`https://media.tenor.com/images/d7afc6b3fe2611147e080f2bdf6e9957/tenor.gif`, ({ dynamic: true }))
            .setDescription(`**Membro:** ${member}\n**Motivo:** ${motivo}\n**Esta é sua:** 1ª ADV\n\n Caso você ache que a punição foi aplicada incorretamente, senta e chora.`)
            .setFooter('Gamezada © 2021', bot.user.displayAvatarURL())
            .setTimestamp()
        canal.send(embed); 
        (member).send(`Oi estranho! 🤥\n**Você acaba de ser advertido em gamezada! ☹**\n> **Está é sua:** 1ª ADV.\n> **Motivo:** ${motivo}\n\n Caso você ache que a punição foi aplicada incorretamente, senta e chora. 🪑😭`);
        member.roles.add(role).catch(console.error);

        
    }
}