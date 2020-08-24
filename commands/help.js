const Discord = require("discord.js");
const {embedes,embcommand} = new Discord.MessageEmbed()
    .setColor(0x00AE86);
exports.run = (client, message, args) => {
    if (!args[0]) {
        const myCommands = client.commands;


        const commandNames = myCommands.keyArray();

        let currentCategory = "";
        let output = ` Command List \n\n[Use ${message.settings.prefix}help <commandname> for details]\n`;
        const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1);
        sorted.forEach(c => {
            const cat = c.help.category.toProperCase();
            if (currentCategory !== cat) {
                embedes.addField('**' + cat + '**'," ");
                currentCategory = cat;
            }

            embedes.addField(`${message.settings.prefix}${c.help.name}`, `${c.help.description}\n`, false);
        });
        embedes.setTitle("help");
        embedes.setDescription(output);
        message.channel.send({embed: embedes});
    } else {
        // Show individual command's help.
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            embcommand.setTitle(`${command.help.name}`);
            embcommand.setDescription(`${command.help.description}`);
            message.channel.send({embed:embcommand});
        }
    }
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "help",
    category: "info",
    description: "Displays all the available commands for your permission level."

};


