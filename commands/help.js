const Discord = require("discord.js");
const embedes = new Discord.MessageEmbed()
    .setColor(0x00AE86);
const embcommand = new Discord.MessageEmbed()
    .setColor(0x00AE86);
exports.run = (client, message, args) => {
    if (!args[0]) {
        const myCommands = client.commands;

        let currentCategory = "";
        let output = ` Command List \n\nUse ${message.settings.prefix}help <commandname> for details\n`;
        const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1);
        sorted.forEach(c => {
            const cat = c.help.category.toProperCase();
            if (currentCategory !== cat) {
                embedes.addField('**' + cat + '**', "**------------------------**");
                currentCategory = cat;
            }
            embedes.setTitle("help");
            embedes.setDescription(output);
            embedes.addField(`${message.settings.prefix}${c.help.name}`, `${c.help.SDescription}\n`, false);
        });
        message.channel.send({embed: embedes});
    } else {
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            embcommand.setTitle(`${command.help.name}`);
            embcommand.setDescription(`${command.help.LDescription}`);
            embcommand.addField("aliases",`${command.conf.aliases.join(", ")}`);
        }
        message.channel.send({embed: embcommand});
    }
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h",],
    permLevel: "User"
};

exports.help = {
    name: "help",
    category: "info",
    SDescription: "Displays all the available commands for your permission level.",
    LDescription: "Displays all the available commands for your permission level."
};


