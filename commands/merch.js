const text = require("../assets/text.json");
const links = require("../assets/links.json");

exports.run = async (client, message) => {
    await message.channel.send(links.merch.streamlabs);
    await message.channel.send(links.merch.teespring);
    await message.channel.send(links.merch.screenwave);
};

exports.conf = {
    enabled: true,
    aliases: [],
};

exports.help = {
    name: "merch",
    usage: "merch",
    category: "info",
    SDescription: text.help.short.merch,
    LDescription: text.help.long.merch
};

