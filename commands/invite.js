const text= require("../assets/text.json");
exports.run = async (client, message) => {
  let user =message.author.id;
  await user.send(text.invite);
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