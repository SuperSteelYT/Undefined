const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => 
{
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(config.developerOnlyMessage);
      return;
    }
    let argsConsole = args.join(" ");
    if (argsConsole.length === 0)
    {
      message.channel.send(":x: Please enter an argument.");
      return;
    }
    if (argsConsole === "clear")
    {
        console.clear();
        message.channel.send(":white_check_mark: Successfully cleared console!");
        return;
    }
    message.channel.send(":white_check_mark: Successfully logged **" + argsConsole + "** to the console.");
    console.log(`[Command] ${message.author.username}: ${argsConsole}`);
};

module.exports.help = 
{
    name: "console"
};