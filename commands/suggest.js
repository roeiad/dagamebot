const Discord = require("discord.js");


exports.run = async (client, message) => {
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
    let title, description, usage;
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
    await message.channel.send("welcome to the Suggestion center for dabot\n if in any part you having trouble, type 'help'\n 'cancel` to cancel");

    await message.channel.send("enter the command name");

    collector.on('collect', message => {
        if (message.content === "help") {
            message.channel.send("da!{command name}");
        } else if (message.content === "cancel") {
            return message.channel.send("canceling");
        } else {
            title = message.content;
            message.channel.send("enter a description");
            if (message.content === "help") {
                message.channel.send("describe what this command will do");
            } else if (message.content === "cancel") {
                return message.channel.send("canceling");
            } else {
                description = message.content;
                message.channel.send("how do you use it");
                if (message.content === "help") {
                    message.channel.send("how will you use this command\n for example: da!{command name} or da!{command name} @user");
                } else if (message.content === "cancel") {
                    return message.channel.send("canceling");
                } else {
                    usage = message.content;
                }
            }
        }

        const embed = new Discord.MessageEmbed()
            .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
            .setTitle(title)
            .setDescription(description)
            .addField("usage", usage)
            .setTimestamp();

        channel.send(embed).then(m => {
            m.react("✅");
            m.react("❌");
        });
    });
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