const Discord = require("discord.js");


exports.run = async (client, message) => {
    let args = [];
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"));
    const collector = message.channel.createMessageCollector({time: 15000});

    await message.channel.send({embed: {description: "welcome to the Suggestion center for dabot\n if in any part you having trouble, type 'help'\n 'cancel` to cancel"}});

    message.channel.send("what is the name of the command").then(() => {
        message.channel.awaitMessages({max: 1, time: 30000, errors: ['time']})
            .then(collected => {
                args.push(collected.first());
                message.channel.send(`describe the command`).then(() => {
                    message.channel.awaitMessages({max: 1, time: 30000, errors: ['time']})
                        .then(collected => {
                            args.push(collected.first());
                            const embed = new Discord.MessageEmbed()
                                .setAuthor("by: " + message.author.tag, message.author.avatarURL())
                                .setTitle("SUGGESTION:" + args[0])
                                .setDescription(args[1])
                                .setTimestamp();

                            channel.send(embed).then(m => {
                                m.react("✅");
                                m.react("❌");
                            });
                        });
                })

                    .catch(collected => {
                        message.channel.send('canceling');
                    });
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
    SDescription: "Send your Suggestion",
    LDescription: "Send your Suggestion",
    category: "other"
};