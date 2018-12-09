const Discord = require("discord.js");
const array = require("../array.json");

module.exports.run = async (client, message, args) => 
{
    let argsEightBall = args.join(" ");
    if (argsEightBall.length === 0)
    {
      message.channel.send(":x: Please enter a question.");
      return;
    }
    const embed = new Discord.RichEmbed()
      .setTitle(":8ball: 8-Ball")
      .addField("Question Asked", argsEightBall)
      .addField("Response", array.eightBallResponses[Math.floor(Math.random() * array.eightBallResponses.length)])
      .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "8ball"
};