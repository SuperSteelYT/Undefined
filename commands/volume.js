const Discord = require("discord.js");

module.exports.run = async (client, message, args, ops) => 
{
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(":x: No music is currently playing.");

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(":x: You're not in the same channel as the bot.");

    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send(":x: Please provide a number between 0-200.");

    fetched.dispatcher.setVolume(args[0]/100);

    message.channel.send(`:white_check_mark: The volume of **${fetched.queue[0].songTitle}** has been set to **${args[0]}%**.`);
};

module.exports.help = 
{
    name: "volume"
};