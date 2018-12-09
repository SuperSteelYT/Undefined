const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    message.channel.send(array.quotesJake[Math.floor(Math.random() * array.quotesJake.length)]);
};

module.exports.help = 
{
    name: "jake"
};