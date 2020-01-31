const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var message = msg.toString().split(" ");
	if(message[0] == "!newchan")
	{
		var category ;
		if ((category = msg.guild.channels.find(channel => channel.type == "category" && channel.name == message[2])) == null)
		{
			msg.guild.createChannel(message[2], 'category')
  				.then(function(category) {msg.guild.createChannel(message[1], 'text')
					.then(function(chan) {chan.setParent(category)})
			})
		}
		else
		{
			msg.guild.createChannel(message[1], 'text')
				.then(function(chan) {chan.setParent(category)})
		}
	}
	else if (message[0] == "!join")
	{
		var role ;
		if ((role = msg.guild.roles.find(role1 => role1.name == message[1])) == null)
		{
			msg.guild.createRole({
		    		name: message[1],
		    		position: 0,
				hoist: true,
		    		mentionable: true
		    		})
  				.then(function(role) 
				      {
					msg.member.addRole(role)
			})
		}
		else
		{
			msg.member.addRole(role)
		}
	}
	else if (message[0] == "!leave")
	{
		var role ;
		if ((role = msg.member.roles.find(role1 => role1.name == message[1])) != null)
		{
			msg.member.removeRole(role);
			role.members.delete(msg.member);
			console.log(role.members);
			if (role.members.first() == null)
			{
				role.delete();
			}
		}
	}
})

client.login(process.env.BOT_KEY);
