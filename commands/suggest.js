const Discord = require("discord.js");
exports.run = async (client, message) => {
    let args = [];
    let netro=client.users.cache.get("173027655719845888");
    let server= `${message.guild.name}`;
    const filter = m => {
        return m.author.id === message.author.id;
    };

    message.channel.send({embed: {description: "welcome to the Suggestion center for dabot\n if in any part you having trouble, type 'help'\n 'cancel` to cancel"}});
    message.channel.send("what is the name of the command").then(() => {
        message.channel.awaitMessages(filter, {max: 1, time: 10000, errors: ['time']})
            .then(collected => {
                args.push(collected.first().content);
                message.channel.send(`describe the command`).then(() => {
                    message.channel.awaitMessages(filter, {max: 1, time: 10000, errors: ['time']})
                        .then(collected => {
                            args.push(collected.first().content);
                            const embed = new Discord.MessageEmbed()
                                .setAuthor( message.author.tag, message.author.avatarURL())
                                .setFooter(server)
                                .setTitle("SUGGESTION:" + args[0])
                                .setDescription(args[1])
                                .setTimestamp();
                         netro.send(embed).then(m => {
                                m.react("✅");
                                m.react("❌");
                                args = [];
                            });


                        })
                        .catch(collected => {
                            message.channel.send('canceling');
                        });
                });

            })
            .catch(collected => {
                message.channel.send('canceling');
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
    usage: "suggest",
    SDescription: "Send your Suggestion",
    LDescription: "Send your Suggestion",
    category: "other"
};