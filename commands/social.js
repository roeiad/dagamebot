const text = require("../text.json")
exports.run = async (client, message) => {
    const twitter = new Discord.MessageEmbed()
        .setTitle("twitter")
        .setURL("https://twitter.com/DAGamesOfficial")
        .setColor(0x00ACEE)
        .setThumbnail("https://pbs.twimg.com/profile_images/1269240624504467456/uIigyOP1_200x200.jpg")
        .setDescription(text.twitter)
    const youtube = new Discord.MessageEmbed()
        .setTitle("youtube")
        .setURL("https://www.youtube.com/user/DiamondArmadaOnline")
        .setColor(0xFF0000)
        .setDescription(text.youtube)
        .setThumbnail("https://yt3.ggpht.com/a/AATXAJzb7yosXzm6PLx21qi2ZIlKy-xLKRO-bcomZWUVrA=s100-c-k-c0xffffffff-no-rj-mo")
        .setFooter(" ", "https://www.freepnglogos.com/uploads/youtube-logo-red-hd-13.png")

    const twitch = new Discord.MessageEmbed()
        .setTitle("twitch")
        .setURL("https://www.twitch.tv/dagamesofficial")
        .setColor(0x6441a5)
        .setThumbnail("https://images-ext-2.discordapp.net/external/6vWrXeRdB1RKYXLdgQ9el75ZAMcrODldV_qthRp6ssc/https/static-cdn.jtvnw.net/jtv_user_pictures/9fd13095-e26d-48e8-9332-f403a688a69e-profile_image-300x300.png")
    return [await message.channel.send({embed: youtube}), await message.channel.send({embed: twitter}), await message.channel.send({embed: twitch})]
};

