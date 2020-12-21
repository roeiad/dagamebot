const pics = require("../assets/pics.json");

exports.run = async (message) => {
    await message.channel.send(pics.son);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "boi",
    usage:"boi",
    category: "fun",
    SDescription: "dont talk",
    LDescription: "dont talk"
};
