// const fs=require("fs");
exports.run = async (message) => {
    // const DontTalk = fs.readFile('../../aassets/son.png');
    await message.channel.send( { files: ["../../assets/son.png"] });
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
