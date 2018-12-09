const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    if (!message.member.voiceChannel) return message.channel.send(":x: Join a channel first!");

    if (!message.guild.me.voiceChannel) return message.channel.send(":x: Bot isn't connected to a voice channel.");

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(":x: You're not in the same channel as the bot.");

    message.guild.me.voiceChannel.leave();

    message.channel.send(":white_check_mark: Successfully left!");
};

module.exports.help = 
{
    name: "leave"
};