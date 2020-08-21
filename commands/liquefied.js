const liqufy = require("../functions/liquid.js");
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
    name: "liquefied"
};
