const text= require("../assets/text.json");
const pics = require("../assets/pics.json");
const Discord = require("discord.js");


exports.run = async (client, message) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(text.pet)
            .setColor(0x00AE86)
            .setImage(pics.plush);

        return await message.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: "User"
};

exports.help = {
    name: "pet",
    usage:"pet",
    category: "fun",
    SDescription: "pet the little boi",
    LDescription: "pet the little boi"
};
