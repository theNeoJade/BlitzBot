const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    const mes = args.join(' ')
    let embed = new discord.RichEmbed()
    .setTitle(`Report Bug System`)
    .setDescription(mes)
    .setColor(`RED`)
    .setFooter(`This message was sent by ${message.author.tag}`)
    .setThumbnail(bot.user.avatarURL)
    bot.channels.find(c => c.id == "516033466886914051").send({ embed })
}
module.exports.config = {
	name: "reportbug",
	aliases: ["contact", "message", "report"],
	usage: "!reportbug <message>",
	description: "The report a bug to BlitzBot",
	accessableby: "Everyone"
 }
