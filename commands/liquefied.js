const randomMedia = require("../functions/randomMedia.js");
const text = require("../assets/text.json");

exports.run = async (client,message) => {
    const arg = message.content.split(' ');
    const face = randomMedia.getFace(arg[1]);
    await message.channel.send(face);
};

exports.conf = {
    enabled: true,
    aliases: ["liquid","face"],
};

exports.help = {
    name: "liquefied",
    usage:"liquefied",
    category: "fun",
    SDescription: text.help.short.liquified,
    LDescription: text.help.long.liquified
};
