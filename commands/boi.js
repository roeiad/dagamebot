const randomMedia = require("../functions/randomMedia.js");
const text= require("../assets/text.json");

exports.run = async (client,message) => {
    const media = randomMedia.boi();
    await message.channel.send(media);
};

exports.conf = {
    enabled: true,
    aliases: ["will","haha","silly"],
};

exports.help = {
    name: "boi",
    usage:"boi",
    category: "fun",
    SDescription: text.help.short.boi,
    LDescription: text.help.long.boi
};
