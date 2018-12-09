// Setting up the environment and required bot modules
const Discord = require("discord.js");
const client = new Discord.Client();
// Other modules
const fs = require("fs");
const config = require("./config.json");

const active = new Map();
let ops = 
{
  active: active
}

// Command Handler
client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("No commands to load.");

  console.log(`[Startup] Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
  });
  console.log(`[Startup] Loaded ${jsfiles.length} commands.`)
});

// Runs when bot is working
client.on("ready", () => 
{
  console.log("[Startup] Undefined is up and running!");
  client.user.setStatus("idle")
  client.user.setActivity(config.activity, { type: "WATCHING" })
});

// Messaging functions
client.on("message", (message) => 
{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  let msg = message.content.toUpperCase();

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(client, message, args, ops);
})
client.login(config.token);