const discord = require('discord.js')
const mod = require('../json/moderation.json')

module.exports.run = (bot, message, args) => {
    if (!mod.Owners.includes(message.author.id)) return message.channel.send("Nope!");
    const mes = args.join(' ')
    console.log(mes)
}

module.exports.config = {
    name: "logs",
    aliases: ["logthis", "log", "consolelog", "consolelogs"],
    usage: "!logs <message>",
    description: "Just for owners to have a nice system to write in logs.",
    accessableby: "Owners"
  }