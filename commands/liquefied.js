const text= require("../text.json")
const liqufy = require("../liquid.js")

exports.run = async (client, message) => {

  let face = liqufy.getFace()
  await message.channel.send(face);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "liquefied"
};
