const text = require("../assets/text.json");
const links = require("../assets/links.json");
exports.run = async (client, message) => {
    await message.channel.send(links.playlist);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "music",
    usage:"da!music",
    category: "info",
    SDescription: text.help.short.music,
    LDescription: text.help.long.music
};

