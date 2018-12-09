const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(config.developerOnlyMessage);
      return;
    }
    message.author.send("The invite URL is: https://discordapp.com/oauth2/authorize?client_id=514217659391279114&scope=bot&permissions=0.")
    message.channel.send(":mailbox_with_mail: You got DMs!");
};

module.exports.help = 
{
    name: "invite"
};