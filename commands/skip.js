const Discord = require("discord.js");

module.exports.run = async (client, message, args, ops) => 
{
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(":x: No music is playing currently.");

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(":x: You're not in the same channel as the bot!");

    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount/2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`:x: You have already voted to skip. ${fetched.queue[0].voteSkips.length}`);

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    if (fetched.queue[0].voteSkips.length >= required) 
    {
        message.channel.send(":white_check_mark: Skipped the current song.");

        return fetched.dispatcher.emit("finish");
    }

    message.channel.send(`:ballot_box: Added your vote to skip! ${fetched.queue[0].voteSkips.length}/${required} required`);
};

module.exports.help = 
{
    name: "skip"
};