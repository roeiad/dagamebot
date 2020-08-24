const liqufy = require("../functions/liquid.js");
const text = require("../assets/text.json");
exports.run = async (client, message) => {

    const face = liqufy.getFace();
    await message.channel.send(face);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "liquefied",
    category: "fun",
    description: text.help.liquified
};
