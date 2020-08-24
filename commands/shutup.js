const text = require("../assets/text.json");
const shutUp = "https://media3.giphy.com/media/H7qmfG8LE8j8BLTBFf/giphy.gif";
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
            .setImage(shutUp);

        return await message.channel.send({embed});
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "shutup",
    category: "all",
    description: text.help.shutup
};
