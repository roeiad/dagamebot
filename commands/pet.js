const text= require("../assets/text.json");
const pics = require("../assets/pics.json");
const Discord = require("discord.js");
const Canvas = require('canvas');


exports.run = async (message) => {
    const pet=message.mentions.users.first();
    const canvas = Canvas.createCanvas(580, 580);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage(pics.plush);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(580, 0, canvas.width, canvas.height);

	// Wait for Canvas to load the image
	const avatar = await Canvas.loadImage(pet.avatarURL({ format: 'jpg' }));
	// Draw a shape onto the main canvas
	ctx.drawImage(avatar, 182, 140, 171, 171);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	await message.channel.send(pet.username+" "+message.author.username, attachment);
        // const embed = new Discord.MessageEmbed()
        //     .setTitle(text.pet)
        //     .setColor(0x00AE86)
        //     .setImage(pics.plush);
        // return await message.channel.send({embed});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [""],
    permLevel: "User"
};

exports.help = {
    name: "pet",
    usage:"pet",
    category: "fun",
    SDescription: text.help.pet,
    LDescription: text.help.pet
};
