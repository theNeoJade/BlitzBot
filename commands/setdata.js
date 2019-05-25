const discord = require('discord.js')
const config = require('../json/config.json')
const guildDetails = require('../schema.js')

module.exports.run = (bot, message, args) => {
    const guild = message.guild
    const guildname = guild.name
    const guildid = guild.id 
    const guildowner = guild.owner.id
    
    const newSchema = new guildDetails({guildName: guildname, guildId: guild.id, GuildOwner: guild.owner})
    newSchema.save()
}
module.exports.config = {
    name: "setdata"
}
