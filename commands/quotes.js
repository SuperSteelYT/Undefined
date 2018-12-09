const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    const embed = new Discord.RichEmbed()
      .setTitle("Quote Subcommands")
      .setDescription("`jake`, `speed`, `tobi`, `neo`, `rhymix`, `super`")
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "quotes"
};