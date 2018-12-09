const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    function shutdownBot(channel) {
        channel.send("Shutting down...")
        .then(msg => client.destroy());
      }
      if (message.author.id !== "227042732953174016") {
        message.channel.send(config.developerOnlyMessage);
        return;
      }
      shutdownBot(message.channel);
};

module.exports.help = 
{
    name: "shutdown"
};