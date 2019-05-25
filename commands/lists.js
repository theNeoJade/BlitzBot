const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
    const lists = new discord.RichEmbed()
    .setTitle('Bot Listings:')
    .setDescription('Discord Boats (Logo: https://cdn.discordapp.com/icons/439866052684283905/56f03ff212c0535c3180548dd3148238.jpg, server invite: https://discord.gg/weAfTdc )')
    message.reply({embed: lists})
}

module.exports.config = {
    name: "lists",
    aliases: ["botlists", "botlistings"],
    usage: "lists",
    description: "The lists the bot is on.",
    accessableby: "Everyone"
}