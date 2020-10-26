const randomMedia = require("../functions/randomMedia.js");
const text = require("../assets/text.json");

exports.run = async (message) => {
    const arg = message.content.split(' ');
    const letter=arg[1];
    const face = randomMedia.getFace(letter);
    await message.channel.send(face);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["liquid","face"],
    permLevel: "User"
};

exports.help = {
    name: "liquefied",
    usage:"liquefied",
    category: "fun",
    SDescription: text.help.short.liquified,
    LDescription: text.help.long.liquified
};
