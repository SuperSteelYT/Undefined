const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    message.channel.send(array.quotesSpeed[Math.floor(Math.random() * array.quotesSpeed.length)]);
};

module.exports.help = 
{
    name: "speed"
};