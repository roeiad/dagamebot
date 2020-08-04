const Discord = require("discord.js");
const liqufy = require("./liquid.js")
const client = new Discord.Client();
const config = require("./config.json");
const text = require("./text.json")

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity(`da!help`);
});


client.on("message", async message => {
    if (message.author.bot) return;


    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "liquid") {
        let file = liqufy.getFace()
        await message.channel.send({files: [file]});
    }
    if (command === "outtro") {
        await message.channel.send(text.outro);
    }
    if (command === "intro") {
        await message.channel.send("hey buddies is " + message.author.username + " of DAGames");
    }
    if (command === "help") {
    await message.author.send(text.help)
    }
});

client.login(process.env.token);