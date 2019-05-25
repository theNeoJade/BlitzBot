const discord = require('discord.js')
const bot = new discord.Client()
const config = require('../json/config.json')
const mod = require('../json/moderation.json')

module.exports.run = (bot, message, args) => {
    const embed = new discord.RichEmbed() 
    .setTitle(`Info for ${config.bname}`)
    .addField("Hi!", `Hello, ${message.author.username}, I'm ${bot.user.username} version ${config.bversion}, a Discord bot running on NodeJS Version 8.`)
    .addField(`Version?`,`I'm currently running on Discord.js version 12.0.0 which utilizes the latest version of Discord.js, an *unofficial* Discord library by hydrabolt.`)
    .addField(`Creators`,`The main owners are <@${mod.Owners}>.`)
    .addField(`How to use me`,`To see what I can do, use ${config.prefix}help`)
    .addField(`Want more help?`,`Contact me on disord by dming me Blitz#5920 or by joining the server https://discord.gg/tb5bknB`)
    .addField(`Serving`, `I am serving ${bot.guilds.size} servers and ${bot.users.size} users currently!`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send({embed: embed})
}
module.exports.config = {
    name: "info",
    aliases: ["infoo", "qna"],
    usage: "!info",
    description: "Some generic info about BlitzBot",
    accessableby: "Everyone"
  }   
