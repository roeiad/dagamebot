const text= require("../assets/text.json");
const pics = require("../assets/pics.json");
const Discord = require("discord.js");

exports.run = async (client,message) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(text.pet)
            .setColor(0x00AE86)
            .setImage(pics.plush);
        return await message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    aliases: [""],
};

exports.help = {
    name: "pat",
    usage:"pat",
    category: "fun",
    SDescription: text.help.pet,
    LDescription: text.help.pet
};
