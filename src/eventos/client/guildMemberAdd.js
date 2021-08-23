const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br');
const ultrax = require('ultrax');
const { registerFont } = require('canvas')
registerFont('212-Baby-Girl.otf', { family: "212 Baby Girl" });

module.exports = async (bot, member) => {
    const canal = member.guild.channels.cache.get('774310708162723880');

    const guild = bot.guilds.cache.get("755439766228435369");

    //const emoji = member.guild.emojis.cache.find(emoji => emoji.name === "nikecolombia");

    let bg = 'https://media.discordapp.net/attachments/852195165191798845/860363401175498762/ezgif-2-cff81c51a5ac.png'

    let avatar = member.user.displayAvatarURL({ format: "png" })

    let txt1 = "Bem-vindo(a)!"

    let text2 = member.user.tag

    let text3 = `🏄‍♂️`

    let color = '#000'


    const options = {
		font: "212 Baby Girl",
		attachmentName: `boasvindas-${member.id}`
	}

    const imgCnvs = await ultrax.welcomeImage(bg, avatar, txt1, text2, text3, color, options)
	

    canal.send(`<@${member.user.id}>`, imgCnvs)


}