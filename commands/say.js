module.exports.run = (bot, message, args) => {
 message.delete(20)
 message.channel.send(args.join(' '))
}

module.exports.config = {
	name: "say",
	aliases: ["speak", "talk"],
	usage: "!say <message>",
	description: "Tell me what to say.",
	accessableby: "Everyone"
 }
