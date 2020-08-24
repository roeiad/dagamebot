const text= require("../assets/text.json");
exports.run = async (client, message) => {
  await message.channel.send(text.outro);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "outtro",
  usage:"da!outro",
  category: "fun",
  SDescription: text.help.short.outtro,
  LDescription: text.help.long.outtro};