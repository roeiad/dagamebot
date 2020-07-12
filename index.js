const Discord = require("discord.js");
const liqufy = require("./liquid.js")
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
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
    if (command === "outro") {
        await message.channel.send(" if you like what you saw here click like and subscribe share with friend and family Maybe your dog Check out da game's official for the newest information on music and animations Let's Plays and live streams on our channel I'm will of DA games and we {insert part here}");
    }

});

client.login(process.env.token);