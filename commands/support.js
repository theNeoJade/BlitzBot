const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
  .addField(`You needed support?`,`If you need support contact us using the server https://discord.gg/tb5bknB`)
  .setTimestamp()
  .setColor("GREEN")
  message.channel.send({embed: embed})
}

module.exports.config = {
	name: "support",
	aliases: ["halpmeh", "supportme"],
	usage: "!support",
	description: "INVITE TO THE SUPPORT SERVER",
	accessableby: "Everyone"
 }
