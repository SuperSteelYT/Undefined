const Discord = require("discord.js");

module.exports.run = async (client, message, args, ops) => 
{
    let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send(":x: No music is playing currently.");

    let queue = fetched.queue;
    let nowPlaying = queue[0];

    let resp = `Now playing:\n**${nowPlaying.songTitle}** // Requested by: **${nowPlaying.requester}**\n\nQueue:\n`;

    for (var i = 1; i < queue.length; i++)
    {
        resp += `${i}. **${queue[i].songTitle}** // Requested by: **${queue[i].requester}**\n`;
    }

    message.channel.send(resp);
};

module.exports.help = 
{
    name: "queue"
};