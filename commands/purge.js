const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) =>
{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(config.noPerms);

    if (isNaN(args[0])) return message.channel.send(":x: Please enter a valid number to purge.");

    if (args[0] > 100) return message.channel.send(":x: There is a purge limit of 100. Please provide a number that is less.");

    message.channel.bulkDelete(args[0])
        .catch(error => message.channel.send(":x: An error occurred."));
}

module.exports.help = 
{
    name: "purge"
};