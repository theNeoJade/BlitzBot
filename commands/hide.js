const discord = require('discord.js')
const bot = new discord.Client()

module.exports.run = async (bot, message, args) => {
    message.reply('Hiding, see ya soon!')
    bot.user.setPresence({ game: { name: 'Hide'}, status: 'invisible'})
}
module.exports.config = {
    name: "hide",
    aliases: ["invis", "invisible"],
    usage: "!hide",
    description: "Hide mee",
    accessableby: "Owner"
}