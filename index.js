const Discord = require("discord.js");
const liqufy = require("./liquid.js")
const client = new Discord.Client();
const config = require("./config.json");
const text = require("./text.json")
const shutUp = "https://media3.giphy.com/media/H7qmfG8LE8j8BLTBFf/giphy.gif"
const info = require("./getinfo.js")


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

    if (command === "liquefied") {
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
            if (atuser === undefined) {
                return await message.channel.send("you want the air to shut up?")
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle(atuser.username + " ," + message.author.username + " wants you to shut up!")
                    .setColor(0x00AE86)
                    .setImage(shutUp)

                return await message.channel.send({embed});
            }
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
    if (command === "info") {
        await message.channel.send(text.info);
    }
    if (command === "social") {
        const twitter = new Discord.MessageEmbed()
            .setTitle("twitter")
            .setURL("https://twitter.com/DAGamesOfficial")
            .setColor(0x00ACEE)
            .setThumbnail("https://pbs.twimg.com/profile_images/1269240624504467456/uIigyOP1_200x200.jpg")
            .setDescription(text.twitter)
        const youtube = new Discord.MessageEmbed()
            .setTitle("youtube")
            .setURL("https://www.youtube.com/user/DiamondArmadaOnline")
            .setColor(0xFF0000)
            .setDescription(text.youtube)
            .setThumbnail("https://yt3.ggpht.com/a/AATXAJzb7yosXzm6PLx21qi2ZIlKy-xLKRO-bcomZWUVrA=s100-c-k-c0xffffffff-no-rj-mo")
            .setFooter(" ", "https://www.freepnglogos.com/uploads/youtube-logo-red-hd-13.png")

        const twitch = new Discord.MessageEmbed()
            .setTitle("twitch")
            .setURL("https://www.twitch.tv/dagamesofficial")
            .setColor(0x6441a5)
            .setThumbnail("https://images-ext-2.discordapp.net/external/6vWrXeRdB1RKYXLdgQ9el75ZAMcrODldV_qthRp6ssc/https/static-cdn.jtvnw.net/jtv_user_pictures/9fd13095-e26d-48e8-9332-f403a688a69e-profile_image-300x300.png")
        return [await message.channel.send({embed: youtube}), await message.channel.send({embed: twitter}), await message.channel.send({embed: twitch})]
    }
    if (command === "help") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Help")
            .setColor(0x00AE86)
            .setDescription("**prefix**:" + text.help.prefix)
            .addField("info", "what the fuck is dagames!??!?", false)
            .addField("social", "where can i found those weirdos?", false)
            .addField("music","playlist of all the songs",false)
            .addField("liquefied", text.help.liquified, false)
            .addField("shutup @user", text.help.shutup, false)
            .addField("intro", text.help.intro, false)
            .addField("outtro", text.help.outtro, false)
            .setFooter("created and developed by netro", "https://cdn.discordapp.com/avatars/173027655719845888/ffca213645861ebc351aa1b266644722.png")
        return await message.channel.send({embed});
    }

})
;

client.login(process.env.token);