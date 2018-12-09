const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let argsSay = args.join(" ");
    if (argsSay.length === 0)
    {
      message.channel.send(":x: Please enter a message to send as the bot.");
      return;
    }
    message.delete();
    message.channel.send(argsSay);
};

module.exports.help = {
    name: "say"
};