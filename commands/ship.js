const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    let person1 = args[0];
    let person2 = args[1];
    if (person1 === undefined || person2 === undefined)
    {
        message.channel.send(":x: Please provide two names!");
        return;
    }
    const embed = new Discord.RichEmbed()
        .setTitle(":heart: Ship")
        .setDescription(`${person1} and ${person2}`)
        .addField("Response", array.shipResponses[Math.floor(Math.random() * array.shipResponses.length)])
        .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "ship"
};