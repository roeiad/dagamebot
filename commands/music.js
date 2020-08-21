const text= require("../text.json")
exports.run = async (client, message) => {
  await message.channel.send("https://www.youtube.com/playlist?list=PLUurKioYqqsLjkDGjf8vNLgG6ZQpIgyGw");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "music"
};

