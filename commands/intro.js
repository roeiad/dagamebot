const text = require("../assets/text.json");

exports.run = async (message) => {
    await message.channel.send("hey buddies is " + message.author.username + " of DAGames");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "intro",
    category: "fun",
    usage:"intro",
    SDescription: text.help.short.intro,
    LDescription: text.help.long.intro
};
