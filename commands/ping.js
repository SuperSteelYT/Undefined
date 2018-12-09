const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    const embed = new Discord.RichEmbed()
      .setTitle("Current Ping")
      .setDescription(Math.round(client.ping) + "ms")
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "ping"
};