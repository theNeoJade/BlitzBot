const discord = require('discord.js')
const config = require('../json/config.json')

module.exports.run = (bot, message, args) => {
const member = message.mentions.members.first();
const newname = args.slice(1).join(" ")
    if(message.member.hasPermission("MANAGE_NICKNAMES")) return member.setNickname(newname);
    message.reply('Sadly, you dont have perms.')
}
module.exports.config = {
	name: "nick",
	aliases: ["n", "nickname"],
	usage: "!nick @user name",
    description: "change a nick",
	accessableby: "depends.."
}