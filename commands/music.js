const text = require("../assets/text.json");
const links = require("../assets/links.json");
exports.run = async (client, message) => {
    if (message === "iris") {
        await message.channel.send(links.iris);
    }
    else {
        await message.channel.send(links.playlist);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "music",
    usage: "music",
    category: "info",
    SDescription: text.help.short.music,
    LDescription: text.help.long.music
};

