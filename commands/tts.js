const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => 
{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(config.noPerms);

    let argsTTS = args.join(" ");
    if (argsTTS.length === 0)
    {
      message.channel.send(":x: Please enter a message to send in TTS form.");
      return;
    }
    message.channel.send(argsTTS, {tts: true})
      .then(msg => {
        msg.delete();
      });
    message.channel.send(":white_check_mark: Sent **" + argsTTS + "** as a TTS message.")
};

module.exports.help = 
{
    name: "tts"
};