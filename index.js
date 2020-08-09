const Discord = require("discord.js");
const liqufy = require("./liquid.js")
const client = new Discord.Client();
const config = require("./config.json");
const text = require("./text.json")
const logger = require("discordjs-logger");
const randomized = require("randomatic")
const shutUp="https://giphy.com/gifs/H7qmfG8LE8j8BLTBFf"


client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity(`da!help`);
});

client.on("debug", function (info) {
    console.log(`debug -> ${info}`);
});

client.on("error", function (error) {
    console.error(`client's WebSocket encountered a connection error: ${error}`);
});

client.on("disconnect", function (event) {
    console.log(
        `The WebSocket has closed and will no longer attempt to reconnect`
    );
});

client.on("message", async message => {
    if (message.author.bot) return;


    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "liquid") {
        let choose = randomized("a", 1, {chars: 'gp'})
        if (choose === "g") {
            let gif = liqufy.facegif()
            await message.channel.send(gif);
        }
    else if (choose === "p") {
            let file = liqufy.getFace()
            await message.channel.send({files: [file]});
        }
    }

    if (command === "liquid-p") {
        let file = liqufy.getFace()
        await message.channel.send({files: [file]});
    }
    if (command === "liquid-g") {
        let gif = liqufy.facegif()
        await message.channel.send(gif);
    }
    if (command=== "shut-up"){
        await message.channel.send(shutUp)
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