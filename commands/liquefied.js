const liqufy = require("../functions/liquid.js");
const text = require("../assets/text.json");
exports.run = async (client, message) => {

    const face = liqufy.getFace();
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
