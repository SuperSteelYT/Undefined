const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    let user = message.mentions.users.first();

    if (user === undefined) return message.channel.send(":x: Please provide the tag of the user you want to get info on.");

    let embed = new Discord.RichEmbed()
        .setTitle(`User Information for ${user.username}`)
        .setThumbnail(user.displayAvatarURL)
        .addField("Username", user.username, true)
        .addField("ID", user.id, true)
        .addField("Status", user.presence.status, true)
        .addField("Account Creation", user.createdAt, true)
        .setColor(0x9e80e8);
    message.channel.send({embed});
};

module.exports.help = 
{
    name: "userinfo"
};