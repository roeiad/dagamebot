const Discord = require("discord.js");
const fs = require("fs")
const d3 = require("d3-random")
const liqufy = "./faces"

const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    // client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});
//
// client.on("guildCreate", guild => {
//     console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
//     client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
// });
//
// client.on("guildDelete", guild => {
//     console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
//     client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
// });


client.on("message", async message => {
    if (message.author.bot) return;


    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "liquid") {
        fs.readdirSync(liqufy, (err, files) => {
            let amount = files.length;
            random = d3.randomUniform(0, amount)
            let face = liqufy + '/' + files[random];
            message.channel.send({files: [face]});
        })
    }
    //
    // if (command === "kick") {
    //     if (!message.member.roles.cache.some(r => ["Administrator", "Moderator"].includes(r.name)))
    //         return message.reply("Sorry, you don't have permissions to use this!");
    //
    //     // Let's first check if we have a member and if we can kick them!
    //     // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    //     // We can also support getting the member by ID, which would be args[0]
    //     let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    //     if (!member)
    //         return message.reply("Please mention a valid member of this server");
    //     if (!member.kickable)
    //         return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    //
    //     // slice(1) removes the first part, which here should be the user mention or ID
    //     // join(' ') takes all the various parts to make it a single string.
    //     let reason = args.slice(1).join(' ');
    //     if (!reason) reason = "No reason provided";
    //
    //     // Now, time for a swift kick in the nuts!
    //     await member.kick(reason)
    //         .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    //     message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);
    //
    // }
    //
    // if (command === "ban") {
    //     // Most of this command is identical to kick, except that here we'll only let admins do it.
    //     // In the real world mods could ban too, but this is just an example, right? ;)
    //     if (!message.member.roles.cache.some(r => ["Administrator"].includes(r.name)))
    //         return message.reply("Sorry, you don't have permissions to use this!");
    //
    //     let member = message.mentions.members.first();
    //     if (!member)
    //         return message.reply("Please mention a valid member of this server");
    //     if (!member.bannable)
    //         return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
    //
    //     let reason = args.slice(1).join(' ');
    //     if (!reason) reason = "No reason provided";
    //
    //     await member.ban(reason)
    //         .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    //     message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
    // }
    //
    // if (command === "purge") {
    //     // This command removes all messages from all users in the channel, up to 100.
    //
    //     // get the delete count, as an actual number.
    //     const deleteCount = parseInt(args[0], 10);
    //
    //     // Ooooh nice, combined conditions. <3
    //     if (!deleteCount || deleteCount < 2 || deleteCount > 100)
    //         return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    //
    //     // So we get our messages, and delete them. Simple enough, right?
    //     const fetched = await message.channel.messages.fetch({limit: deleteCount});
    //     message.channel.bulkDelete(fetched)
    //         .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    // }
});

client.login(process.env.token);