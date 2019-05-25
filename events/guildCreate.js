const discord = require(`discord.js`)
const config = require(`../json/config.json`)
const guildDetails = require('../schema.js')

module.exports = async (bot, guild) => {
    let guildname = guild.name
    let guildid = guild.id 
    let guildowner = guild.owner

const newSchema = new guildDetails({
    guildName: guildname, 
    guildId: guildid, 
    GuildOwner: guildowner
})
newSchema.save()
}