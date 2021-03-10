const text = require("../assets/text.json");
const links = require("../assets/links.json");

exports.run = async (client,message) => {
    message.author.send(links.invite);
};

exports.conf = {
    enabled: true,
    aliases: ["bot"],
};

exports.help = {
    name: "invite",
    usage:"invite",
    category: "other",
    SDescription: text.help.short.invite,
    LDescription: text.help.long.invite
};