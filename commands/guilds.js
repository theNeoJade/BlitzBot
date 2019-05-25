const discord = require('discord.js')
module.exports.run = (bot, message, args) => {
let guildArray = bot.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    message.channel.send(`Here are all the guilds I'm in:\`\`\`${guildArray.join("\n\n")}\`\`\``)
    message.channel.send(`${bot.guilds.size} Guilds`)
}
module.exports.config = {
    name: "guilds"
}