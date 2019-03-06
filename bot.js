const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var message = msg.toString.split(" ")
  if(message[0] == "!newchan")
  {
    msg.
  }
})

client.login(process.env.BOT_KEY);
var channels
