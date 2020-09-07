const randomMedia = require("../functions/randomMedia.js");
exports.run = async (client, message) => {

    const media = randomMedia.boi();
    await message.channel.send(media);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["will","haha","silly"],
    permLevel: "User"
};

exports.help = {
    name: "boi",
    usage:"boi",
    category: "fun",
    SDescription: "its your boi",
    LDescription: "get a silly picture/gif of will"
};
