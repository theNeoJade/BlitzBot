const discord = require("discord.js")
const mod = require('../json/moderation.json')

module.exports.run = (bot, message, args) => {
  if (!mod.Owners.includes(message.author.id)) return message.channel.send("Nope!");
  const type = args[0]
  const game = args.slice(type.length).join(" ")
  const embed = new discord.RichEmbed()
  .setDescription(`I just set my activity to ${type.toLowerCase(),game.toLowerCase()}`)
  .setTimestamp()
  .setColor("RANDOM")
  bot.user.setActivity(game, {type: type})
  message.channel.send({embed: embed})
}

module.exports.config = {
  name: "setactivity",
  aliases: ["setstatus", "statusset", "configstatus"],
  usage: "!setactivity 'thing to set status'",
  description: "Just for owners to have a nice system to change the status of the bot.",
  accessableby: "Owners"
}
