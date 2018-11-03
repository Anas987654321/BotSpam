const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  

});



client.on('ready', async() => {
var server = "508023634909200395"; // ايدي السررفر
var channel = "508023635332694022";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit - Credit**')
    },305);
})

client.login(process.env.BOT_TOKEN)
