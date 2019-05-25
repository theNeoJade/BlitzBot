const discord = require("discord.js")
const config = require('../json/config.json')

module.exports.run = (bot, message, args) => {
    const helpMenu = new discord.RichEmbed()
    .setAuthor(`Blitz`, `https://cdn.discordapp.com/avatars/399973532265742336/16ccc99d07643b4aff4421d8556dec95.png`)
    .setThumbnail(`https://cdn.discordapp.com/avatars/504251593911173130/82bbf8091f7678e42cc29cd5b8bbbeb8.png?size=2048`)
    .setColor(`RANDOM`)
    .setTitle(`Commands!`)
    .setTimestamp()
    .setURL(`Ihttps://discord.boats/bot/504251593911173130`)
    .addField(`__**Owner only commands**__`, `These next commands are for owners of the bot only`)
    .addField(`setnormal`, `Sets the activity back to normal`)
    .addField(`restart`, `Restarts the bot.`)
    .addField(`eval`, `Basically allows you to test code.`)
    .addField(`serverlist`, `Shows a list of servers the bot is in.`)
    .addField()
    message.author.send({embed: helpMenu})
}

module.exports.config = {
    name: "ohelp"
}
