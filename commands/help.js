const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    const embed = new Discord.RichEmbed()
      .setTitle("Undefined Bot Help")
      .addField("General Commands - Normal, everyday bot commands.", "`ping`, `help`, `info`, `userinfo`, `serverinfo`, `uptime`, `say`, `dm`")
      .addField("Music Commands - Them sick tunes.", "`play`, `join`, `leave`, `queue`, `skip`, `pause`, `resume`, `search`, `volume`")
      .addField("Moderation Commands - Keep your server correctly moderated.", "`kick`, `ban`, `purge`, `addrole`, `removerole`")
      .addField("Fun Commands - Warning: Explicit content ahead.", "`8ball`, `ship`, `dice`, `quotes`, `how`, `television`, `tts`, `fortnite`, `f`")
      .addField("Developer-Only Commands - Only for developers.", "`activity`, `invite`, `shutdown`, `restart`, `console`, `reload`")
      .addField("Bot Prefix", "`*`")
      .setColor(0x9e80e8);
    message.author.send({embed});
    message.channel.send(":mailbox_with_mail: You got DMs!");
};

module.exports.help = 
{
    name: "help"
};