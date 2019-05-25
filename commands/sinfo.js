const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
    .setAuthor(`BlitzBot`, bot.user.displayAvatarURL)
      .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .addField("**Region**", `${message.guild.region}`, true)
        .addField("**VerificationLevel**", `${message.guild.verificationLevel}`, true)
        .addField("**Verified?**", `${message.guild.verified}`, true)
        .setTimestamp()
       .setColor("RANDOM")
      message.channel.send({embed: embed})  
  }
// change below for what you use :D
  module.exports.config = {
    name: "sinfo",
    aliases: ["serverinfo", "infoserver"],
    usage: "!serverinfo",
    description: "Gives you the server info",
    accessableby: "Everyone"
   } 