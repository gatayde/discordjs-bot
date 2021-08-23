const Discord = require('discord.js');

module.exports = {
    config: {
        name: "radvs",
        aliases: ['radvs', 'radv'],
        description: "Limpas Adv d um membro",
        example: '!radvs @User#1000',
        usage: '!radvs <user>'
    },
    run: async(bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply('você precisa de permissão para isso!');
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply('eu preciso de permissão para isso!');

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!member) return message.reply('você precisa mencionar um usuário.');
        if (member === message.member) return message.reply('você não pode se auto-advertir!');

        let motivo = args.slice(1).join(" ");
        if (!motivo) return message.reply('você precisa especificar um motivo.');
        message.delete({timeout: 10});

        let canal = message.guild.channels.cache.get('814816443543715891'); 

        let roleadv1 = message.guild.roles.cache.get('755453065288614020');

        let roleadv2 = message.guild.roles.cache.get('763390614854565889');

        const embed = new Discord.MessageEmbed()
            .setTitle('REMOÇÃO')
            .setColor("#2F3136")
            .setThumbnail(`https://media.tenor.com/images/d7afc6b3fe2611147e080f2bdf6e9957/tenor.gif`, ({ dynamic: true }))
            .setDescription(`**Membro:** ${member}\n**Motivo:** ${motivo}\n\n**Advertências removidas.**\n\n Fique por dentro das regras e evite punições 😉.`)
            .setFooter('Gamezada © 2021', bot.user.displayAvatarURL())
            .setTimestamp()
        canal.send(embed);
        (member).send(`Oi estranho! Suas Advs em **Gamezada ©** expiraram!😀\n\n**Fique por dentro das regras e não desrespeite membros!.🪑**`);
        member.roles.remove(roleadv1, roleadv2).catch(console.error);

        
    }
}