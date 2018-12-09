const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    message.channel.send(array.quotesSuper[Math.floor(Math.random() * array.quotesSuper.length)]);
};

module.exports.help = 
{
    name: "super"
};