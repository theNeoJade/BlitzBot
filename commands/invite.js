const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
    const inv = new discord.RichEmbed()
    .setTitle('Bot Invite')
    .setDescription(`I can not accept invites on discord servers! Ask me to join using this link: https://discordapp.com/oauth2/authorize?client_id=529999089753128961&scope=bot&permissions=2146958847`)
    .setColor('GREEN')
    message.author.send({embed: inv})
}

module.exports.config = {
    name: "invite",
    aliases: ["botinv", "inv"],
    usage: "!invite",
    description: "The invite to the bot",
    accessableby: "Everyone"
  }
