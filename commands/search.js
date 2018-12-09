const Discord = require("discord.js");
const search = require("yt-search");

module.exports.run = async (client, message, args, ops) => {
    search(args.join(" "), function (err, res)
    {
        if (err) return message.channel.send("An error occurred.");

        let videos = res.videos.slice(0, 10);

        let resp = "";
        resp += "***Search Results***\n";
        for (var i in videos)
        {
            resp += `**${parseInt(i)+1}**: \`${videos[i].title}\`\n`;
        }

        resp += `\n**Enter a number: ** \`1-${videos.length}\``;

        message.channel.send(resp);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once("collect", function(m)
        {
            let commandFile = require(`./play.js`);
            commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
        });
    });
};

module.exports.help = {
    name: "search"
};