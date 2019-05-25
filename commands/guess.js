const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    const number =  Math.floor(Math.random() * 101 + 0)
    const numberlow = Math.floor(number - 23)
    const numberhigh = Math.floor(number + 22)
    message.reply("guess anumber between " + numberlow+" and "+ numberhigh +"!")
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000 });
    console.log(collector)
    collector.on('collect', message => {
        if(message.content == number) {
        message.reply("YOU WON! Well done!");
        } else if(message.content !== number) { 
        message.reply("You Lost, number was " + number);
    }
    })
}
module.exports.config = {
    name: "guess"
}