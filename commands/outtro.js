const text= require("../assets/text.json");

exports.run = async (message) => {
  await message.channel.send(text.outro);
};

exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: "outtro",
  usage:"outro",
  category: "fun",
  SDescription: text.help.short.outtro,
  LDescription: text.help.long.outtro};