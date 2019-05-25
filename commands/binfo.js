const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
const member = message.member
  const em = new Discord.RichEmbed()
  .setAuthor(bot.user.username , bot.user.displayAvatarURL)
    .setTitle('UserInfo')
    .setColor('RANDOM')
    .setImage(bot.user.avatarURL) 
    .addField('Created At',"I was created on " + bot.user.createdTimestamp, true) 
    .addField('Discrim', "My descriminator is " +bot.user.discriminator, true) 
    .addField('ID',"My id is " + bot.user.id, true) 
    .addField('Presence Status',"My status is " + bot.user.presence.status, true)
    .addField('Tag',"My tag is " + bot.user.tag, true) 
    .addField('Username',"My name is " + bot.user.username, true)
    .addField('Update', "Most recent update was " + `\`${require("../json/config.json").bupdate}\``)
    message.channel.send(em);
}

module.exports.config = {
  name: "binfo",
  aliases: ["botinfo", "infobot"],
  usage: "!botinfo",
  description: "Gives you the bot info",
  accessableby: "Everyone"
} 
