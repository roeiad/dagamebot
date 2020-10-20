const text = require("../assets/text.json");
const links = require("../assets/links.json");

exports.run = async (message) => {
    const arg = message.content.split(' ').shift().toLowerCase();
    switch (arg[1]) {
        default:
            await message.channel.send(links.playlist);
            await message.channel.send(links.iris);
            break;
        case "iris":
            await message.channel.send(links.iris);
            break;
        case "dagames":
            await message.channel.send(links.playlist);
            break;  
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

