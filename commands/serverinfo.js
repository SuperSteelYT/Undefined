const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    let embed = new Discord.RichEmbed()
        .setTitle(`Server Information for ${message.guild.name}`)
        .setThumbnail(message.guild.displayAvatarURL)
        .addField("Server Name", message.guild.name, true)
        .addField("Created", message.guild.createdAt, true)
        .addField("You Joined", message.member.joinedAt, true)
        .addField("Member Count", message.guild.memberCount, true)
        .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "serverinfo"
};