const Discord = require("discord.js");
const liqufy = require("./liquid.js")
const client = new Discord.Client();
const config = require("./config.json");
const text = require("./text.json")
const shutUp = "https://media3.giphy.com/media/H7qmfG8LE8j8BLTBFf/giphy.gif"


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

    if (command === "liquified") {
        let face = liqufy.getFace()
        await message.channel.send(face);
    }

    if (command === "shutup") {
        let atuser = message.mentions.users.first()
        if (atuser === undefined) {
            return await message.channel.send("you want the air to shu up?")
        }
        if (atuser.username === message.author.username) {
            return await message.channel.send(text.rude)
        }
        if (atuser.username === client.user.username) {
            return await message.channel.send("hey!!!!")
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle(atuser.username + " ," + message.author.username + " wants you to shut up!")
                .setColor(0x00AE86)
                .setImage(shutUp)

            return await message.channel.send({embed});
        }
        if (command === "shutup") {
            let atuser = message.mentions.users.first()

            if (atuser.username === message.author.username) {
                return await message.channel.send(text.rude)
            }

            if (atuser.username === client.user.username) {
                return await message.channel.send("hey!!!!")
            }
               if (false) {
                return await message.channel.send("you want the air to shut up?")
            }
        else {
                const embed = new Discord.MessageEmbed()
                    .setTitle(atuser.username + " ," + message.author.username + " wants you to shut up!")
                    .setColor(0x00AE86)
                    .setImage(shutUp)

                return await message.channel.send({embed});
            }
        }
    }
    if (command === "f") {
        let atuser = message.mentions.users.first()
        if (atuser === undefined) {
            return await message.channel.send("you want the air to fuck off?")
        }
        // if (atuser.username === message.author.username) {
        //     return await message.channel.send(text.rude)
        // }
        if (atuser.username === client.user.username) {
            return await message.channel.send("hey!!!!")
        } else {
            // const embed = new Discord.MessageEmbed()
            //     .setTitle(atuser.username + " ," + message.author.username + " is giving you the f")
            //     .setColor(0x00AE86)
            //     .setDescription("https://www.youtube.com/watch?v=6mW6Xpq1BD4")
            //     fil
            //     .addField("testing","https://www.youtube.com/watch?v=6mW6Xpq1BD4",false)
            //
            //
            // return await message.channel.send({embed});
            await message.channel.send("atuser.username + \" ,\" + message.author.username + \" is giving you the f\" https://www.youtube.com/watch?v=6mW6Xpq1BD4")
        }
    }


    if (command === "outtro") {
        await message.channel.send(text.outro);
    }
    if (command === "intro") {
        await message.channel.send("hey buddies is " + message.author.username + " of DAGames");
    }
    if (command === "music") {
        await message.channel.send("https://www.youtube.com/playlist?list=PLUurKioYqqsLjkDGjf8vNLgG6ZQpIgyGw");
    }
    if (command === "help") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setColor(0x00AE86)
            .setDescription("**prefix**:" + text.help.prefix)
            .setFooter("created and developed by netro", "https://cdn.discordapp.com/avatars/173027655719845888/ffca213645861ebc351aa1b266644722.png")
            .addField("intro", text.help.intro, false)
            .addField("outtro", text.help.outtro, false)
            .addField("liquified", text.help.liquified, false)
            .addField("shutup @user", text.help.shutup, false)
        return await message.channel.send({embed});
    }

})
;

client.login(process.env.token);