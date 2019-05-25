const channelid = "530753991500496906";

module.exports = async (bot, msg, icon) => {
    const embed = new (require('discord.js').RichEmbed)()
    .setTitle("BlitzBot Logger")
    .setDescription(`${msg}`)
    .setTimestamp()
    .setColor("RANDOM")
    .setThumbnail(icon)
    bot.channels.get(channelid).send({embed: embed})
}