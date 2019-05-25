const Discord = require("discord.js");
const ms = require("ms");
const config = require('../json/config.json')

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  if(message.author.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them, dont have permissions!");
  if(!args[0 == help]) return message.reply(`This command is used by doing ${config.prefix}delrole **<@user> <Time of mute (s/m/h/d)>**`)
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find user.");
    let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}

module.exports.config = {
  name: "tempmute",
  aliases: ["mute", "tmute"],
  usage: "!tempmute <usertomute> <time s/m/h/d>",
  description: "This command is used to mute users",
  accessableby: "Moderators"
}
