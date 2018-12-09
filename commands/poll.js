const Discord = require("discord.js");

module.exports.run = async (client, message, args) => 
{
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: No permission.");
    let question = args.join(" ");
    if (question.length === 0)
    {
        message.channel.send(":x: Please provide a question to poll!");
        return;
    }

    const embed = new Discord.RichEmbed()
        .setTitle(`**Poll**: ${question}`)
        .setDescription("React to vote.")
        .setColor(0x9e80e8);

    let msg = await message.channel.send({embed});

    await msg.react("✅");
    await msg.react("❎");

    message.delete({timeout: 1000});
};

module.exports.help = 
{
    name: "poll"
};