const text = require("../assets/text.json");

exports.run = async (client,message) => {
    await message.channel.send("hey buddies is " + message.author.username + " of DAGames");
};

exports.conf = {
    enabled: true,
    aliases: [],
};

exports.help = {
    name: "intro",
    category: "fun",
    usage:"intro",
    SDescription: text.help.short.intro,
    LDescription: text.help.long.intro
};
