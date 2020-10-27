const text = require("../assets/text.json");
const links = require("../assets/links.json");

exports.run = async (client, message) => {
    const arg = message.content.split(' ');
    let iris =   message.channel.send(links.iris);
    let dagames= message.channel.send(links.playlist);
    switch (arg[1]) {
        default:
           await iris;
           await dagames;
            break;
        case "iris":
            await iris;
            break;
        case "dagames":
            await dagames; 
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

