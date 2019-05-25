const discord = require("discord.js")
const mod = require('../json/moderation.json')


module.exports.run = (bot, message, args) => {
    if (!mod.Owners.includes(message.author.id)) return message.channel.send("Nope!");
    bot.user.setPresence({ game: { name: '1'}, status: 'online'})
    bot.user.setActivity(`for b!help | ${bot.guilds.size} servers`, {type: "WATCHING"})
    message.channel.send("I set my activity back to normal.")
}

module.exports.config = {
    name: "setnormal",
    aliases: ["setnormalstatus", "statussetnormal", "confignormalstatus", "setactivitynormal"],
    usage: "!setnormal",
    description: "Just for owners to have a nice system to change the status of the bot.",
    accessableby: "Owners"
  }
