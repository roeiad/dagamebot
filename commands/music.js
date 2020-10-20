const text = require("../assets/text.json");
const links = require("../assets/links.json");
exports.run = async (client, message) => {
    // let name="da!music";
    let choose =message.arg[0]
    switch (choose) {
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

    // if (arg[1] === "iris") {
    //     await message.channel.send(links.iris);
    // }
    // else {
    //     await message.channel.send(links.playlist);
    // }
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

