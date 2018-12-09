const Discord = require("discord.js");
const array = require("../array.json")

module.exports.run = async (client, message, args) => 
{
    message.channel.send(":tv: Random Commercials: " + array.commercialList[Math.floor(Math.random() * array.commercialList.length)]);
};

module.exports.help = 
{
    name: "television"
};