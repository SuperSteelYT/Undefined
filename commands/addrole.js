const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) =>
{
    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: No permission.");
    let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(":x: Couldn't find the specified user.");
    let role = args.join(" ").slice(22);
    if (!role) return message.channel.send(":x: Couldn't find the specified role.");
    let grole = message.guild.roles.find(`name`, role);
    if (!grole) return message.channel.send(":x: Couldn't find the specified role.");

    if (member.roles.has(grole.id));
    await (member.addRole(grole.id));

    message.channel.send(`:white_check_mark: Successfully gave <@${member.id}> the ${grole.name} role!`);
};

module.exports.help =
{
    name: "addrole"
};