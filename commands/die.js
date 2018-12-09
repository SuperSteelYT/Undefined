const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    const embed = new Discord.RichEmbed()
      .setTitle(":game_die: Die")
      .addField("Result", Math.round((Math.random() * 5) + 1))
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "die"
};