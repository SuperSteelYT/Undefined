// Setting up the environment
const Discord = require("discord.js");
const client = new Discord.Client();
// Other modules
const weather = require("weather-js");
// Configuration
const prefix = "*";
const token = ":^)";
const activity = /* Watching */ "television.";
const version = "Alpha 0.2";
// Runs when bot is working
client.on("ready", () => 
{
  console.log("Undefined is up and running!");
  client.user.setStatus('idle')
  client.user.setActivity(activity, { type: 'WATCHING' })
});
// Messaging functions
client.on("message", (message) => 
{
  // Variables to make my life easier
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const msg = message.content.toUpperCase();
  // Reused variables
  const developerOnlyMessage = ":x: This command is developer-only!"

  // Chat Responses - These are NOT in the command list.
  if (msg.includes("GOOD JOB UNDEFINED"))
  {
    message.channel.send("Thank you! I am doing my best. :thumbsup:")
  }

  // Non-Quote Commands

  // Ping - Find your ping
  if (msg.includes(prefix + "PING"))
  {
    const embed = new Discord.RichEmbed()
      .setTitle("Current Ping")
      .setDescription(Math.round(client.ping) + "ms")
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // Help - Help for the bot
  if (msg.includes(prefix + "HELP") || msg.includes(prefix + "COMMANDS"))
  {
    const embed = new Discord.RichEmbed()
      .setTitle("Undefined Bot Help")
      .addField("General Commands - Normal, everyday bot commands.", "`ping`, `help`, `information`, `uptime`, `say`, `dm`")
      .addField("Fun Commands - Warning: Explicit content ahead.", "`8ball`, `dice`, `quotes`, `how`, `television`")
      .addField("Developer-Only Commands - Only for developers.", "`activity`, `tts`, `invite`, `shutdown`, `restart`")
      .addField("Bot Prefix", "`*`")
      .setColor(0x9e80e8);
    message.author.send({embed});
    message.channel.send(":mailbox_with_mail: You got DMs!");
  }

  // Activity - Set the activity of the bot
  if (msg.includes(prefix + "ACTIVITY"))
  {
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(developerOnlyMessage);
      return;
    }
    let argsActivity = args.join(" ");
    if (argsActivity.length === 0)
    {
      message.channel.send(":x: Please enter an activity.");
      return;
    }
    if (argsActivity === "reset")
    {
      client.user.setActivity(activity, { type: 'WATCHING' })
      message.channel.send(":white_check_mark: Activity has successfully been reset.");
      return;
    }
    client.user.setActivity(argsActivity);
    message.channel.send(":white_check_mark: Activity has successfully been set to: **" + argsActivity + "**");
  }

  // Information - Gives information about the bot
  if (msg.includes(prefix + "INFO") || msg.includes(prefix + "INFORMATION"))
  {
    const embed = new Discord.RichEmbed()
      .setTitle("Undefined Bot Information")
      .addField("Bot Creation", client.user.createdAt, true)
      .addField("Bot Server Size", client.guilds.size, true)
      .addField("Bot Channel Size", client.channels.size, true)
      .addField("Bot Version", version, true)
      .addField("Bot Developer", "`Super#9652`", true)
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // Uptime - Gives the current uptime of the bot
  if (msg.includes(prefix + "UPTIME"))
  {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    const embed = new Discord.RichEmbed()
      .setTitle("Bot Uptime")
      .setDescription(`${days}d, ${hours}h, ${minutes}m, ${seconds}s`)
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // 8-Ball - Shakes an 8-ball for the question of choice
  if (msg.includes(prefix + "8BALL"))
  {
    let argsEightBall = args.join(" ");
    if (argsEightBall.length === 0)
    {
      message.channel.send(":x: Please enter a question.");
      return;
    }
    const embed = new Discord.RichEmbed()
      .setTitle(":8ball: 8-Ball")
      .addField("Question Asked", argsEightBall)
      .addField("Response", eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)])
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // TTS - Sends a message in TTS
  if (msg.includes(prefix + "TTS"))
  {
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(developerOnlyMessage);
      return;
    }
    let argsTTS = args.join(" ");
    if (argsTTS.length === 0)
    {
      message.channel.send(":x: Please enter a message to send in TTS form.");
      return;
    }
    message.channel.send(argsTTS, {tts: true})
      .then(msg => {
        msg.delete();
      });
    message.channel.send(":white_check_mark: Sent **" + argsTTS + "** as a TTS message.")
  }

  // Invite - Gives the user the bot invite URL
  if (msg.includes(prefix + "INVITE"))
  {
    if (message.author.id !== "227042732953174016") 
    {
      message.channel.send(developerOnlyMessage);
      return;
    }
    message.author.send("The invite URL is: https://discordapp.com/oauth2/authorize?client_id=514217659391279114&scope=bot&permissions=0.")
    message.channel.send(":mailbox_with_mail: You got DMs!");
  }

  // Quote Commands

  // Quotes - Main command that lists all users that are quoted
  if (msg.includes(prefix + "QUOTES"))
  {
    const embed = new Discord.RichEmbed()
      .setTitle("Quote Subcommands")
      .setDescription("`jake`, `speed`, `tobi`, `neo`, `rhymix`, `super`")
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // Jake - Quote command for Jake
  if (msg.includes(prefix + "JAKE"))
  {
    message.channel.send(quotesJake[Math.floor(Math.random() * quotesJake.length)]);
  }

  // Speed - Quote command for speed
  if (msg.includes(prefix + "speed"))
  {
    message.channel.send(quotesSpeed[Math.floor(Math.random() * quotesSpeed.length)]);
  }

  // Tobi - Quote command for Tobi
  if (msg.includes(prefix + "TOBY"))
  {
    message.channel.send(quotesTobi[Math.floor(Math.random() * quotesTobi.length)]);
  }

  // Neo - Quote command for Neo
  if (msg.includes(prefix + "NEO"))
  {
    message.channel.send(quotesNeo[Math.floor(Math.random() * quotesNeo.length)]);
  }

  // Rhymix - Quote command for Rhymix
  if (msg.includes(prefix + "RHYMIX"))
  {
    message.channel.send(quotesRhymix[Math.floor(Math.random() * quotesRhymix.length)]);
  }

  // Super - Quote command for Super
  if (msg.includes(prefix + "SUPER"))
  {
    message.channel.send(quotesSuper[Math.floor(Math.random() * quotesSuper.length)]);
  }

  // Non-Quote Commands (Part 2)

  // Say - Bot says the message that you specify.
  if (msg.includes(prefix + "SAY"))
  {
    let argsSay = args.join(" ");
    if (argsSay.length === 0)
    {
      message.channel.send(":x: Please enter a message to send as the bot.");
      return;
    }
    message.delete();
    message.channel.send(argsSay);
  }

  // DM - Bot sends you a DM of the message that you specify.
  if (msg.includes(prefix + "DM"))
  {
    let argsDM = args.join(" ");
    if (argsDM.length === 0)
    {
      message.channel.send(":x: Please enter a message for the bot to DM you.");
      return;
    }
    message.delete();
    message.author.send(argsDM);
  }

  // Die - Roll a die
  if (msg.includes(prefix + "DIE")) 
  {
    const embed = new Discord.RichEmbed()
      .setTitle(":game_die: Die")
      .addField("Result", Math.round((Math.random() * 5) + 1))
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // Weather - Show the weather for a specific location.
  if (msg.includes(prefix + "WEATHER"))
  {
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) 
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
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Scale', `°${location.degreetype}`, true)
        .addField('Temperature', `${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds', current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)
        .setColor(0x9e80e8);

        message.channel.send({embed});
    });
  }

  // Restart - Restart the bot.
  if (msg.includes(prefix + "RESTART"))
  {
    function restartBot(channel) {
      channel.send('Restarting...')
      .then(msg => client.destroy())
      .then(() => client.login(token))
      .then(channel.send(":white_check_mark: Bot restarted successfully!"));
    }
    if (message.author.id !== "227042732953174016") {
      message.channel.send(developerOnlyMessage);
      return;
    }
    restartBot(message.channel);
  }

  // Shutdown - Shutdown the bot.
  if (msg.includes(prefix + "SHUTDOWN"))
  {
    function shutdownBot(channel) {
      channel.send('Shutting down...')
      .then(msg => client.destroy());
    }
    if (message.author.id !== "227042732953174016") {
      message.channel.send(developerOnlyMessage);
      return;
    }
    shutdownBot(message.channel);
  }

  // How... - How... <your choice here>
  if (msg.includes(prefix + "HOW"))
  {
    let argsHow = args.join(" ");
    if (argsHow.length === 0)
    {
      message.channel.send(":x: Please enter a modifier.");
      return;
    }
    const embed = new Discord.RichEmbed()
      .setTitle(":question: How...")
      .addField("Modifier", argsHow)
      .addField("Response", Math.round((Math.random() * 100) + 1) + "%")
      .setColor(0x9e80e8);
    message.channel.send({embed});
  }

  // Television - Random old TV commercials
  if (msg.includes(prefix + "TELEVISION"))
  {
    message.channel.send(":tv: Random Commercials: " + commercialList[Math.floor(Math.random() * commercialList.length)]);
  }
})
// Array Lists
const eightBallResponses = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
]
const quotesTobi = [
  'fuck off',
  'mexice',
  'SUPERITO WITH NO BANDITO',
  'memed.com is now AFK.',
  'SUPERITO',
  '*laughing intensifies*',
  'terrible admin applications'
];
const quotesSpeed = [
  'yes',
  '!!',
  'gay',
  'no',
  'fuc',
  'shut',
  ':b:an',
  'okay, this is epic',
  ':^)',
  ':\')',
  '[ADMIN] CONSOLE [Console]: test',
  'clan console is stuck on one message',
  'square is gay',
  'thank',
  'xd',
  'https://cdn.discordapp.com/emojis/399972553524903938.png?v=1',
  'my laptop wants to die',
  'cannot send empty message',
  'my peepee hard',
  'seth is short for sethime'
];
const quotesJake = [
  'what year is it',
  'super go to fucKING SCHOOL',
  'She\'s asleep on me',
  'milly is in my bed help',
  'only on tuesdays'
];
const quotesNeo = [
  'can we commit the act of intercourse',
  'when i see zekurt, my meat mysteriously goes up',
  'fuck im have an erection',
  'wank yank spank thank',
  'sucky sucky fucky fucky love me long time',
  'jake can i devour your gooch',
  'wow thats epic',
  'jake i hope you dont wake up',
  'wit im thinking',
  'Lemon is my daddy kink o w o',
  'what happened i was sleeping',
  'gays inform me',
  'i took a look at my enormous penis'
];
const quotesRhymix = [
  'speediv is mexican',
  'r r r r r'
];
const quotesSuper = [
  'gay',
  'speed = small peepee',
  'lion company',
  'premium mints ex',
  'fortnite gamer',
  'gamer boys',
  'gamer girls',
  'spood 4',
  'remix',
  'lightus',
  'remove furry',
  'hi jake',
  'arsex'
];
const commercialList = [
  "https://www.youtube.com/watch?v=XzaZEZrDpQ0",
  "https://www.youtube.com/watch?v=3ZMaoVhmrD0",
  "https://www.youtube.com/watch?v=jn4c6wo7I-o",
  "https://www.youtube.com/watch?v=ihbTepXa2Xc"
]
client.login(token);