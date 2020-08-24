const text = require("../assets/text.json");
const Discord = require("discord.js");
exports.run = (client, message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setColor(0x00AE86)
        .setDescription("**prefix**:" + text.help.prefix)
        .addField("info", text.help.info, false)
        .addField("social", text.help.social, false)
        .addField("music", text.help.music, false)
        .addField("liquefied", text.help.liquified, false)
        .addField("shutup @user", text.help.shutup, false)
        .addField("intro", text.help.intro, false)
        .addField("outtro", text.help.outtro, false)
        .setFooter("created and developed by netro", "https://cdn.discordapp.com/avatars/173027655719845888/ffca213645861ebc351aa1b266644722.png");
    return message.channel.send({embed});
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "help"
};


