const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (client, message, args) => 
{
    weather.find({search: args.join(" "), degreeType: "F"}, function(err, result) 
    {
      if (err) message.channel.send(err);

      if (result === undefined || result.length === 0) 
      {
        message.channel.send(":x: Please enter a valid location.");
        return;
      }

      var current = result[0].current;
      var location = result[0].location;

      const embed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Current Weather in ${current.observationpoint}`)
        .setFooter("Requested by " + message.author.username)
        .setTimestamp()
        .setThumbnail(current.imageUrl)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .addField("Scale", `°${location.degreetype}`, true)
        .addField("Temperature", `${current.temperature} Degrees`, true)
        .addField("Feels Like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .setColor(0x9e80e8);

        message.channel.send({embed});
    });
};

module.exports.help = 
{
    name: "weather"
};