const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

module.exports = {
    config: {
        name: "say",
        aliases: ['sayy'],
        description: 'Mostra uma msg!',
        example: "!say oi",
        usage: '!say <msg>'
    },

    run: async (bot, message, args) => {
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


            let say = args.slice(0).join(' ');
            message.delete({ timeout: 10 })

            message.channel.send(say)



        }
    }
}
