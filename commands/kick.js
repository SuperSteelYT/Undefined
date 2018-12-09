const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => 
{
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(config.noPerms);
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(":x: Please mention a member to be kicked.")
    if (!member.kickable) return message.channel.send(":x: You cannot kick a member with a higher or equal role than you.")

    let reason = args.slice(1).join(" ");

    await member.kick(reason)
    .catch(error => {
        message.channel.send(":x: An error occurred.")
        console.log(error);
    });

    const embed = new Discord.RichEmbed()
        .setTitle(":boom: Kick")
        .setDescription(`**${member.user.username}** was kicked by **${message.author.username}** for **${reason}**`)
        .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "kick"
};