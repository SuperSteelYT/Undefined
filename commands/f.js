const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.channel.send(`${message.author.username} has paid their respects. Amount paid: ${Math.round((Math.random() * 9999) + 1)}`);
};

module.exports.help = {
    name: "f"
};