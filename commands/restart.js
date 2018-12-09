const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    function restartBot(channel) {
        channel.send("Restarting...")
        .then(msg => client.destroy())
        .then(() => client.login(token))
        .then(channel.send(":white_check_mark: Bot restarted successfully!"));
      }
      if (message.author.id !== "227042732953174016") {
        message.channel.send(config.developerOnlyMessage);
        return;
      }
      restartBot(message.channel);
};

module.exports.help = 
{
    name: "restart"
};