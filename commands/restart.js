const discord = require("discord.js")
const mod = require('../json/moderation.json')
const token = require("../json/token.json").token

module.exports.run = (bot, message, args) => {
  if (!mod.Owners.includes(message.author.id)) return message.channel.send("Nope!");
let em = new discord.RichEmbed()
.setTitle(`${bot.user.username} Restarting...`)
.setDescription(":wave: Restarting...")
.setTimestamp()
.setColor("GOLD")
let embed = new discord.RichEmbed()
.setTitle(`${bot.user.username} Restarted!`)
.setDescription(`:thumbsup: ${bot.user.username} Successfully Restarted.`)
.setThumbnail(bot.user.avatarURL)
.setTimestamp()
.setColor("GOLD")

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .then(() => bot.login(token))
    .catch(err => console.error(err))
    .then(() => message.channel.send({embed: embed}))
  }
  
  restart(message.channel)
}
module.exports.config = {
  name: "restart",
  aliases: ["reload", "rstrt", "rld"],
  usage: "!restart",
  description: "Just for owners to have a nice system to restart the bot.",
  accessableby: "Owners"
}
