const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "511860332344639502"; // ايدي السيرفر
var channel = "511860693797044224";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , Spam , **')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login("NTExODYyNjE0MDgzNzY0MjQ3.DsxE4Q.F9l-fxk2RtgJp9yN3XVkbp4YjWY");
