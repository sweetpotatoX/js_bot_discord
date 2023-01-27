const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("The bot is ready!");
});

client.on("message", message => {
    if (!message.content.startsWith("!") || message.author.bot) return;

    const args = message.content.slice("!".length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "disconnect") {
        if (!message.mentions.members.first()) {
            return message.reply("Please mention a valid member of this server");
        }
        message.mentions.members.first().voice.setChannel(null);
    }
});

client.login("YOUR_TOKEN_HERE");