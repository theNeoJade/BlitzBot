const guildDetails = require('../schema.js')
const discord = require('discord.js')

module.exports = (bot, guild, discord) => {
    guildDetails.findOne();

}
module.exports.config = {
    name: ""
}
