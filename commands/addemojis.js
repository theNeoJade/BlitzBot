const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
const guild = message.guild
    guild.createEmoji('./images/Online.png', 'online')
    guild.createEmoji('./images/Offline.png', 'offline')

    guild.createEmoji('./images/Idle.png', 'idle')
    guild.createEmoji('./images/DND.png', 'dnd')
    
    guild.createEmoji('./images/Streaming.png', 'streaming')
}

module.exports.config = {
    name: "addemojis",
    aliases: ["addemoji", "emojis"],
    usage: "!addemojis",
    description: "add emojis",
    accessableby: "everyone"
  }
