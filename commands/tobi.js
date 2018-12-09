const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    message.channel.send(array.quotesTobi[Math.floor(Math.random() * array.quotesTobi.length)]);
};

module.exports.help = 
{
    name: "tobi"
};