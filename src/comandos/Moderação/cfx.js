const Discord = require("discord.js")
const axios = require("axios").default
const disbut = require('discord-buttons');

module.exports = {
    config: {
        name: "cfx",
        aliases: ['cfx']
    },

    run: async (client, message, args) => {
        let cfxLink = args[0]
        if (!cfxLink) return message.reply("Você não especificou um link cfx!")
        let cfxUrl
        if (cfxLink.startsWith("cfx.re/join/")) {
            cfxUrl = cfxLink.slice(12)
        } else {
            cfxUrl = cfxLink
            cfxLink = "cfx.re/join/" + cfxLink
        }

        axios.get(`https://servers-frontend.fivem.net/api/servers/single/${cfxUrl}`).then(async response => {
            if (!response.status === 200) return
            let allping = 0
            response.data.Data.players.forEach(element => {
                allping += element.ping
            });
            let ping = allping / response.data.Data.clients

            let Tittle = args.slice(1).join(" ");

            let link = args.slice(2).join(" ");
            
            let embed = new Discord.MessageEmbed()
                .setTitle(Tittle)
                .setDescription(`Divirta-se trocando tiro e conhecendo`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .setColor("#2F3136")
                .addFields(
                    { name: "Servidor:", value: '```connect foguete.gg```\n', inline: false },
                    { name: "TeamSpeak:", value: '```ts.foguete.gg```\nㅤ\nㅤ', inline: false },
                    { name: "Status:", value: '\`\`\`Online\`\`\`', inline: true },
                    { name: "Jogadores:", value: `${response.data.Data.clients} / ${response.data.Data.sv_maxclients}`, inline: true }
                )
            const button = new disbut.MessageButton()
                .setLabel('FiveM')
                .setStyle('url')
                .setURL(link)
            message.channel.send({
                buttons: [
                    button
                ],
                embed: embed
            });
        })/*.catch(err => {
            message.reply("Não foi possivel encontrar um server com esse link ou o mesmo se encontra offline")
            return
        })*/

    }
}
