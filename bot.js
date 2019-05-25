/*
    Created by Neon Richards, Do Not Copy.

    Last Update: 5 of May 2019
*/
const pak = require(`./package.json`)
discord = require('discord.js')
fs = require('fs')
const botconfig = require('./json/config.json')
const bot = new discord.Client()
const prefix = botconfig.prefix
const token = require("./json/token.json")
const log = require('./logger.js')
bot.commands = new discord.Collection()
bot.owners = ['399973532265742336']
fs.readdir('./commands/', (err, files) => {
   if (err) return console.log("Error loading commands.");
   files.filter(f => f.split(".").pop() == "js").forEach((f,i) => {
       bot.commands.set(require(`./commands/${f}`).config.name, require(`./commands/${f}`))
    })
})
// Database 
const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://neon:${token.datapass}@cluster0-bfrw5.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
.then(() => console.log("Mongoose has connected."))
.catch(err => console.log(`Mongoose failed to connect. Error: ${err}`))
// Events
bot.on("guildCreate", (member, guild) => require('./events/guildCreate.js')(bot, member, guild))
// Watching
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity(`for b!help | ${bot.guilds.size} servers!`, {type: "WATCHING"});
    log(bot, `${bot.user.username} started successfully!`, bot.user.avatarURL)
  });
// Command running
bot.on("message", async message => {

    if(message.author.bot || message.channel.type === "dm") return;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].slice(prefix.length)
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) 
    if(commandfile) commandfile.run(bot,message,args)
    console.log(`Username: ${message.author.username} used the command ${message}`)
    log(bot, `${message.author.username} just used the ${cmd} command at ${new Date().getHours()}:${new Date().getMinutes()}.`, message.author.avatarURL)
})
bot.login(token.token)
/*
Created by Neon Richards, Do Not Copy.

Last Update: 9 of May 2019
*/