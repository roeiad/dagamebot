const Discord = require("discord.js");


exports.run = async (client, message) => {
    let description, name;
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));

    await message.channel.send({embed: {description: "welcome to the Suggestion center for dabot\n if in any part you having trouble, type 'help'\n 'cancel` to cancel"}});

    await message.channel.send("enter the command name");
    if (message.content === "help") {
        message.channel.send("da!{command name}");
    } else if (message.content === "cancel") {
        return message.channel.send("canceling");
    } else {
        name = message.content;
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
            description = message.content;
        }
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor("by: " + message.author.tag, message.author.avatarURL())
        .setTitle("SUGGESTION:" + name)
        .setDescription(description)
        .setTimestamp();

    channel.send(embed).then(m => {
        m.react("✅");
        m.react("❌");
    });
}
;


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