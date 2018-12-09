const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setAuthor(user.username)
        .setImage(user.displayAvatarURL)
        .setFooter("Requested by " + message.author.username)
        .setTimestamp()
        .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "avatar"
};