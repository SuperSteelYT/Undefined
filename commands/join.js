const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.member.voiceChannel) return message.channel.send(":x: Join a channel first!");

    if (message.guild.me.voiceChannel) return message.channel.send(":x: Bot is already connected to a voice channel.");

    message.member.voiceChannel.join()
        .then(connection => {
            message.channel.send(":white_check_mark: Successfully connected!")
        });
};

module.exports.help = 
{
    name: "join"
};