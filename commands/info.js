const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => 
{
    const embed = new Discord.RichEmbed()
      .setTitle("Undefined Bot Information")
      .addField("Bot Creation", client.user.createdAt, true)
      .addField("Bot Server Size", client.guilds.size, true)
      .addField("Bot Channel Size", client.channels.size, true)
      .addField("Bot Version", config.version, true)
      .addField("Bot Developer", "`Super#9652`", true)
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "info"
};