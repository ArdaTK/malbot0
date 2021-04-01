const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + " Magler");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

client.on("ready", () => {
  console.log(
    `${client.user.username} ismi ile giriş yapıldı! ${client.guilds.size} Sunucu, ${client.users.size} Kullanıcı.`
  );
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let maglar = await data.get(msg.author.id);

        if (maglar === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(1500);
          await msg.channel.send("https://discord.gg/UbpKRZCERA"); // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.
          await sleep(1500);
          await msg.channel.send("Done");
        }
      }
    }
  }
});

client.on("guildCreate", maglar => {
  sleep(1000);
  if (
    maglar.id === "613327525044682752" || // j4j sunucusunun idsi
    maglar.id === "613327525044682752" // j4j sunucusunun idsi
  ) {
  } else {
    maglar.leave();
  }
});

client.on("ready", () => {
  setInterval(() => {
    let a = client.channels.get("756861511300939838"); // j4j sunucusunun kanal id'si

    a.send("!d dump");
  }, 7200000);
});
client.login("NzczNTI5NTI1MTU3NzU2OTQ5.YGDI-Q.FpZVTZT9M4o3NwioT5P_R9NFMEM"); // user tokeniniz
