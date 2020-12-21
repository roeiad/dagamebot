// const fs=require("fs");
// const test = require("../assets/son.png");
exports.run = async (message) => {
    await message.channel.send( { files: ["../assets/son.png"] });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "boi",
    usage:"boi",
    category: "fun",
    SDescription: "dont talk",
    LDescription: "dont talk"
};
