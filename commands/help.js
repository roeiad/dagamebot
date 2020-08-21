/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/
const text = require("../text.json")
const Discord = require("discord.js");

exports.run = (client, message)  => {
  // If no specific command is called, show all filtered commands.
    const embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setColor(0x00AE86)
        .setDescription("**prefix**:" + text.help.prefix)
        .addField("info", text.help.info, false)
        .addField("social", text.help.social, false)
        .addField("music",text.help.music,false)
        .addField("liquefied", text.help.liquified, false)
        .addField("shutup @user", text.help.shutup, false)
        .addField("intro", text.help.intro, false)
        .addField("outtro", text.help.outtro, false)
        .setFooter("created and developed by netro", "https://cdn.discordapp.com/avatars/173027655719845888/ffca213645861ebc351aa1b266644722.png")
    return  message.channel.send({embed});
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


