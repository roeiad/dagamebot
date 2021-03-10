const pics = require("../assets/pics.json");

exports.run = async (client,message) => {
    await message.channel.send(pics.son);
};

exports.conf = {
    enabled: true,
    aliases: [],
};

exports.help = {
    name: "son",
    usage:"son",
    category: "fun",
    SDescription: "dont talk",
    LDescription: "dont talk"
};
