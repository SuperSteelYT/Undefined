const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => 
{
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(config.developerOnlyMessage);
      return;
    }
    let argsActivity = args.join(" ");
    if (argsActivity.length === 0)
    {
      message.channel.send(":x: Please enter an activity.");
      return;
    }
    if (argsActivity === "reset")
    {
      client.user.setActivity(config.activity, { type: 'WATCHING' })
      message.channel.send(":white_check_mark: Activity has successfully been reset.");
      return;
    }
    client.user.setActivity(argsActivity);
    message.channel.send(":white_check_mark: Activity has successfully been set to: **" + argsActivity + "**");
};

module.exports.help = 
{
    name: "activity"
};