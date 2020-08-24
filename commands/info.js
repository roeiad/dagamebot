const text= require("../assets/text.json");
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
  name: "info",
  category: "info",
  description: text.help.info

};