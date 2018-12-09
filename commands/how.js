const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    let argsHow = args.join(" ");
    if (argsHow.length === 0)
    {
      message.channel.send(":x: Please enter a modifier.");
      return;
    }
    const embed = new Discord.RichEmbed()
      .setTitle(":question: How...")
      .addField("Modifier", argsHow)
      .addField("Response", Math.round((Math.random() * 100) + 1) + "%")
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "how"
};