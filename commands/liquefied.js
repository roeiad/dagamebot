const text= require("../text.json")
const liqufy = require("../liquid.js")

exports.run = async (client, message) => {

  let face = liqufy.getFace()
  await message.channel.send(face);
  };

