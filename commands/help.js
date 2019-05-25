const Discord = require("discord.js")
const botconfig = require("../json/config.json");
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead.`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setAuthor(`Blitzbot Help`, message.guild.iconURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n**Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setAuthor(`Help Command!`, message.guild.iconURL)
        .setDescription(`${message.author.username} check your dms!`)
        let Sembed = new Discord.RichEmbed()
        .setAuthor(`Blitzbot Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`These are the avaliable commands for Blitz Bot!\nThe bot prefix is: ${prefix}`)
        .addField(`Commands:`, "Normal:\n``uinfo`` ``binfo`` ``sinfo`` ``uptime`` ``info`` ``ping`` ``support`` ``invite`` ``say`` ``reportbug`` ``lists`` ``owners``\n Moderation:\n ``tempmute`` ``addemojis`` ``nick`` ``kick`` ``addrole`` ``delrole``")
        .setFooter("BlitzBot", bot.user.displayAvatarURL)
        message.channel.send(embed).then(m => m.delete(10000));
        message.author.send(Sembed)
    }
}
module.exports.config = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "!usage",
    description: "",
    accessableby: "Members"
}