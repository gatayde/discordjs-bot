const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br');

module.exports = async (bot, member) => {
	const canal = member.guild.channels.cache.get('774310708162723880');

    const message = `👈 ${member.user.username} saiu do servidor!`
    canal.send(message)


}