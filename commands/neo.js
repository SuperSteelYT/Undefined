const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    message.channel.send(array.quotesNeo[Math.floor(Math.random() * array.quotesNeo.length)]);
};

module.exports.help = 
{
    name: "neo"
};