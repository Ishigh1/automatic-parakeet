const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var message = msg.toString().split(" ");
	if(message[0] == "!newchan")
	{
		role = msg.guild.createRole({name: message[1]});
		var category ;
		if ((category = msg.guild.channels.find(channel => channel.type == category && channel.name == message[2])) == undefined)
		{
			msg.guild.createChannel(message[2], 'category')
  			.then(function(category) {msg.guild.createChannel(message[1], 'text', [{
  				id: role.id,
  				allow: ['SEND_MESSAGES', 'READ_MESSAGES'],
				}])
				.then(function(chan) {chan.setParent(category)})
			})
		}
		else
		{
			category => msg.guild.createChannel(message[1], 'text', [{
  				id: role.id,
  				allow: ['SEND_MESSAGES', 'READ_MESSAGES'],
				}])
				.then(function(chan) {chan.setParent(category)})
		}
	}
})

client.login(process.env.BOT_KEY);
