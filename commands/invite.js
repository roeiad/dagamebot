const text = require("../assets/text.json");
exports.run = async (client, message) => {
    message.author.send(text.invite)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "invite",
    category: "other",
    description: text.help.invite
};