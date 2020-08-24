const text= require("../assets/text.json");
exports.run = async (client, message) => {
  await message.author.id.send(text.invite);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "invite"
};