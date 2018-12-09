const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    message.channel.send(array.quotesRhymix[Math.floor(Math.random() * array.quotesRhymix.length)]);
};

module.exports.help = 
{
    name: "rhymix"
};