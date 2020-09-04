const Discord = require("discord.js");


exports.run = async (client, message) => {
    let args = [];
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
    const collector = message.channel.createMessageCollector({time: 15000});

    await message.channel.send({embed: {description: "welcome to the Suggestion center for dabot\n if in any part you having trouble, type 'help'\n 'cancel` to cancel"}});

    await message.channel.send("enter the command name");

    collector.on('collect', message => {
        if (message.content === "help") {
            message.channel.send("da!{command name}");
        } else if (message.content === "cancel") {
            return message.channel.send("canceling");
        } else {
            args.push(message.content);
        }
    });
    collector.on('collect', message => {
        message.channel.send("enter a description");
        if (message.content === "help") {
            message.channel.send("da!{command name}");
        }
        if (message.content === "cancel") {
            return message.channel.send("cancelling");
        }
        if (message.content === "help") {
            message.channel.send("describe what this command will do");
        } else {
            args.push(message.content);
        }
    });

        const embed = new Discord.MessageEmbed()
            .setAuthor("by: " + message.author.tag, message.author.avatarURL())
            .setTitle("SUGGESTION:" + args[0])
            .setDescription(args[1])
            .setTimestamp();

        await channel.send(embed).then(m => {
            m.react("✅");
            m.react("❌");
        });
        args = [];
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "suggest",
    usage: "da!suggest",
    description: "Send your Suggestion",
    category: "other"
};