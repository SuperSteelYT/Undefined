const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(config.developerOnlyMessage);
      return;
    }
    if (!args || args.size < 1) return message.channel.send(":x: Please provide a command to reload.");
    const cmdName = args[0];

    if (!client.commands.has(cmdName))
    {
        return message.channel.send(":x: No such command exists!");
    }

    delete require.cache[require.resolve(`./${cmdName}.js`)];

    client.commands.delete(cmdName);
    const props = require(`./${cmdName}.js`);
    client.commands.set(cmdName, props);
    message.channel.send(`:white_check_mark: ${cmdName} has successfully been reloaded!`);
};

module.exports.help = 
{
    name: "reload"
};