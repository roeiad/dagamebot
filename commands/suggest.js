const text = require("../assets/text.json");
const Discord = require("discord.js");


exports.run = async (client, message) => {
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 10000});
    let description;
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    await message.channel.send("welcome to the Suggestion center for dabot\n type 'cancel` to cancel");

    message.channel.send("enter a your suggestion");

    collector.on('collect', message => {
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

        const embed = new Discord.MessageEmbed()
            .setAuthor("by: " + message.author.tag, message.author.avatarURL())
            .setTitle("SUGGESTION")
            .setDescription(description)
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