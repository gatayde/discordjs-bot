const Discord = require("discord.js");

module.exports = {
    config: {
        name: "anuncio",
        aliases: ['anunciar'],
        description: ",,",
        example: ',',
        usage: ','
    },
    run: async(bot, message, args) => {
        message.delete();
        var roles = [
            '[🔒]  CEO',
            '[💻] Desenvolvedor',
            '[🔥] Administrador',
            '🥼'
        ]
        var hasRole = false;
        roles.forEach(findrole => {
            if (message.member.roles.cache.some(role => role.name === findrole)) hasRole = true;
        });
        if (hasRole === true) {
            const anunMsg = message.content.slice(8)
            const anunEmbed = new Discord.MessageEmbed()
                .setTitle(`Anúncio`)
                .setDescription(anunMsg)
                .setColor(3092790)
                .setTimestamp()
                .setThumbnail(`https://cdn.discordapp.com/attachments/859845012447297597/863193548173475840/GifKUSH.gif`)
            message.channel.send(`@everyone`, anunEmbed);
        }
    }
};


