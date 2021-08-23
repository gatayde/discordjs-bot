// https://discord.gg/4SAfNhdWNn
const Discord = require('discord.js');

module.exports = {
    config: {
        name: "convite",
        aliases: ['linkdcc'],
        description: "Mostra o convite do dc!",
        usage: "!linkdc"
    },
    run: async (bot, message, args) => {
        message.channel.send("https://discord.gg/4SAfNhdWNn")
    }
}