const text= require("../text.json")
exports.run = async (client, message) => {
  await message.channel.send("hey buddies is " + message.author.username + " of DAGames");
};


