const text= require("../text.json")
exports.run = async (client, message) => {
  await message.channel.send(text.outro);
};
