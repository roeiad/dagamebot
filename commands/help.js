/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/
const Discord = require("discord.js");
let embedes
exports.run = (client, message, args) => {
    // If no specific command is called, show all filtered commands.
    if (!args[0]) {
        // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
        const myCommands = client.commands;

        // Here we have to get the command names only, and we use that array to get the longest name.
        // This make the help commands "aligned" in the output.
        const commandNames = myCommands.keyArray();
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

        let currentCategory = "";
        let output = `= Command List =\n\n[Use ${message.settings.prefix}help <commandname> for details]\n`;
        const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1);
        embedes = new Discord.MessageEmbed();
        sorted.forEach(c => {
            const cat = c.help.category.toProperCase();
            if (currentCategory !== cat) {
                output += `\u200b\n== ${cat} ==\n`;
                currentCategory = cat;
            }
            embedes.addField(`${message.settings.prefix}${c.help.name}`, `${c.help.description}\n`);
        });
        embedes.setTitle(output);
        message.channel.send({embed: embedes});
    } else {
        // Show individual command's help.
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.channel.send(`= ${command.help.name} = \n${command.help.description}=\n= ${command.help.name} =`, {code: "asciidoc"});
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
    category: "all",
    description: "Displays all the available commands for your permission level."

};


