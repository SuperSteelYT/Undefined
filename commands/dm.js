const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let argsDM = args.join(" ");
    if (argsDM.length === 0)
    {
      message.channel.send(":x: Please enter a message for the bot to DM you.");
      return;
    }
    message.delete();
    message.author.send(argsDM);
};

module.exports.help = {
    name: "dm"
};