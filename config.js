const config = {
    // Bot Owner, level 10 by default. A User ID. Should never be anything else than the bot owner's ID.
    "ownerID": "173027655719845888",

    // Bot Admins, level 9 by default. Array of user ID strings.
    // "admins": [],

    // Bot Support, level 8 by default. Array of user ID strings
    // "support": [],

    // Your Bot's Token. Available on https://discordapp.com/developers/applications/me
    "token": process.env.token,

    // Default per-server settings. New guilds have these settings.

    // DO NOT LEAVE ANY OF THESE BLANK, AS YOU WILL NOT BE ABLE TO UPDATE THEM
    // VIA COMMANDS IN THE GUILD.

    "defaultSettings" : {
        "prefix": "da!",
        "modLogChannel": "mod-log",
        "modRole": "Moderator",
        "adminRole": "Administrator",
        "systemNotice": "true", // This gives a notice when a user tries to run a command that they do not have permission to use.
        "welcomeChannel": "welcome",
        "welcomeMessage": "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D",
        "welcomeEnabled": "false"
    },

    // PERMISSION LEVEL DEFINITIONS.


};

module.exports = config;