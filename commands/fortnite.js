const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    const embed = new Discord.RichEmbed()
      .setImage(array.fortnite[Math.floor(Math.random() * array.fortnite.length)])
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp()
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "fortnite"
};