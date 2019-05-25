const discord = require('discord.js')
const mod = require('../json/moderation.json')
const log = require('../logger.js')

module.exports.run = (bot, message, args) => {
if(!mod.Owners.includes(message.author.id) || !message.author.id == "399973532265742336") return message.author.send("Nope! You are not an owner/bot commander!")
const content = args.join(" ");
const result = new Promise((resolve, reject) => resolve(eval(content)))
return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Not for your eyes');
    return message.channel.send(output, { code: 'html' })
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(bot.token)) err = err.replace(bot.token, 'Not for your eyes');

    return message.channel.send(err, { code: 'markdown' })
  });  
}
module.exports.config = {
  name: "eval",
  aliases: ["evaluate", "evl", "run"],
  usage: "!eval 'thing to evaluate'",
  description: "Just for owners to have a nice system to run things",
  accessableby: "Owners"
}