const text = require("../assets/text.json");
const links = require("../assets/links.json");
const pics = require("../assets/pics.json");
const Discord = require("discord.js");

exports.run = async (client,message) => {
    const twitter = new Discord.MessageEmbed()
        .setTitle("twitter")
        .setURL(links.twitter)
        .setColor(0x00ACEE)
        .setThumbnail(pics.twitter)
        .setDescription(text.twitter);
    const youtube = new Discord.MessageEmbed()
        .setTitle("youtube")
        .setURL(links.youtube)
        .setColor(0xFF0000)
        .setDescription(text.youtube)
        .setThumbnail(pics.youtube);
    const twitch = new Discord.MessageEmbed()
        .setTitle("twitch")
        .setURL(links.twitch)
        .setColor(0x6441a5)
        .setThumbnail(pics.twitch);
    return [await message.channel.send({embed: youtube}), await message.channel.send({embed: twitter}), await message.channel.send({embed: twitch})];
};

exports.conf = {
    enabled: true,
    aliases: ["links"],
};

exports.help = {
    name: "social",
    usage:"social",
    category: "info",
    SDescription: text.help.short.social,
    LDescription: text.help.long.social
};