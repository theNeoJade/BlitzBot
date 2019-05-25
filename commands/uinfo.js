const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
const member = message.member
  const em = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setTitle('UserInfo')
    .setColor('RANDOM')
    .setImage(member.user.avatarURL, true) 
    .addField('Joined At', member.joinedAt, true) 
    .addField('Created At', member.user.createdAt, false) 
    .addField('Discrim', member.user.discriminator, true) 
    .addField('ID', member.id, true) 
    .addField('Last Message', member.lastMessage, true)
    .addField('Last Message ID', member.lastMessageID, true)
    .addField('Presence Status', member.presence.status, true)
    .addField('Tag', member.user.tag, true) 
    .addField('Roles', message.member.roles.map(r=>r).join('\n'))
    .addField('Username', member.user.username, true)
    .addField('Nick Name', member.displayName, true)
    .setFooter('Requested By', member.user.avatarURL)
    .setTimestamp()
    message.channel.send(em);
}

module.exports.config = {
  name: "uinfo",
  aliases: ["userinfo", "infouser"],
  usage: "!userinfo <user>",
  description: "Gives you the user info",
  accessableby: "Everyone"
 } 
