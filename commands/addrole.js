const discord = require("discord.js")
const config = require('../json/config.json')

module.exports.run = (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("```Invalid Permissions!```");
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`You need to mention a role.`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.");
  let roleid = role.id;
  let rolename = role.name;

  if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);
  member.addRole(role.id);
  let em = new discord.RichEmbed()
  .setTitle(`${config.bname} AddRole`)
  .setDescription(`Okay! I added the role ${rolename} to the user ${member.user.username}.`)
  .setTimestamp()
  .setFooter(`${message.author.username} added role ${rolename} to user ${member.user.username}.`)
  message.channel.send({embed: em})
  if (member.displayName) {
    em.setDescription(`Okay! I added the role ${rolename} to the user ${member.displayName}.`)
    em.setFooter(`${message.author.username} added role ${rolename} to user ${member.displayName}.`)
  }
};

module.exports.config = {
  name: "addrole",
  aliases: ["roleadd"],
  usage: "!addrole <roletoadd> <user>",
  description: "Allows you to add a role to someone.",
  accessableby: "Manage roles permission"
}