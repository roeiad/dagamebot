module.exports = async (client, message) => {
    if (message.author.bot) return;


    const settings = message.settings = client.getSettings(message.guild);

    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
        return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
    }
   
    if (message.content === "when is the next fnaf song") {
        message.channel.send("next fanf song? Oh yea coming yesterday");
    }

    if (message.content.indexOf(settings.prefix) !== 0) return;


    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.guild && !message.member) await message.guild.fetchMember(message.author);


    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;


    message.flags = [];
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }
    client.logger.cmd(`[CMD] } ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
    cmd.run(client, message, args);
};
