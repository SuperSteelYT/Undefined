const Discord = require("discord.js");

module.exports.run = async (client, message, args, ops) => 
{
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(":x: No music is currently playing.");

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(":x: You're not in the same channel as the bot.");

    if (!fetched.dispatcher.paused) return message.channel.send(":x: The music isn't paused.");

    fetched.dispatcher.resume();

    message.channel.send(`:headphones: Resumed **${fetched.queue[0].songTitle}**`)
};

module.exports.help = 
{
    name: "resume"
};