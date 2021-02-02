const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!glejak') {
		message.channel.send('**Gruby to kurwa.exe** https://www.wykop.pl/cdn/c3201142/comment_wup7ytiqduu7Kd2CIKKlnpTQjGuAN1dq.jpg');
	
	}
});
client.login('ODA1OTAzNTAzNDI3NjMzMTUz.YBhqIA.AIumYVdI4jg67bpd7QonrmSmsxU');