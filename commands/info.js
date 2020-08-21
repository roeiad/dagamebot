const text= require("../text.json")
exports.run = async (client, message) => {
  await message.channel.send(text.info);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info"
};