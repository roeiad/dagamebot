exports.run = async (client, message) => {
  await message.channel.send("hey buddies is " + message.author.username + " of DAGames");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "intro"
};
