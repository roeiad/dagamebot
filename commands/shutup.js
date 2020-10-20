const text = require("../assets/text.json");
const pics = require("../assets/pics.json");
const Discord = require("discord.js");

exports.run = async (client, message) => {
    const atuser = message.mentions.users.first();
    if (atuser === undefined) {
        return await message.channel.send("you want the air to shu up?");
    }
    if (atuser.username === message.author.username) {
        return await message.channel.send(text.rude);
    }
    if (atuser.username === client.user.username) {
        return await message.channel.send("hey!!!!");
    } else {
        const embed = new Discord.MessageEmbed()
            .setTitle(atuser.username + " ," + message.author.username + " wants you to shut up!")
            .setColor(0x00AE86)
            .setImage(pics.shutup);
        return await message.channel.send({embed});
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["shut",],
    permLevel: "User"
};

exports.help = {
    name: "shutup",
    usage:"shutup @user",
    category: "fun",
    SDescription: text.help.short.shutup,
    LDescription: text.help.long.shutup
};
