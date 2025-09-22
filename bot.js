/*
███████╗███╗░░░███╗
██╔════╝████╗░████║
█████╗░░██╔████╔██║
██╔══╝░░██║╚██╔╝██║
███████╗██║░╚═╝░██║
╚══════╝╚═╝░░░░░╚═╝

# MADE BY EM OFFICIAL TEAM!! FEEL FREE TO USE ANY PART OF CODE
## FOR HELP CONTACT ME ON DISCORD
## Contact [DISCORD SERVER : https://discord.gg/tUrzH6J3dN]
## YT : https://youtube.com/@emofficial1234
*/

const { Client, GatewayIntentBits } = require("discord.js");
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DeezerPlugin } = require("@distube/deezer");
const { YtDlpPlugin } = require("@distube/yt-dlp");
const { printWatermark } = require('./util/pw');
const config = require("./config.js");
const fs = require("fs");
const path = require('path');
const mongoose = require("mongoose");
const express = require("express");

// Client Setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent
  ]
});

// Config & Player
client.config = config;
client.player = new DisTube(client, {
  leaveOnStop: config.opt.voiceConfig.leaveOnStop,
  leaveOnFinish: config.opt.voiceConfig.leaveOnFinish,
  leaveOnEmpty: config.opt.voiceConfig.leaveOnEmpty.status,
  emitNewSongOnly: true,
  plugins: [
    new SpotifyPlugin(),
    new SoundCloudPlugin(),
    new YtDlpPlugin(),
    new DeezerPlugin()
  ]
});

// Load Events
fs.readdir("./events", (err, files) => {
  if (err) return console.error('EVENTS FOLDER ERROR:', err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

fs.readdir("./events/player", (err, files) => {
  if (err) return console.error('PLAYER EVENTS FOLDER ERROR:', err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const playerEvent = require(`./events/player/${file}`);
    const playerName = file.split(".")[0];
    client.player.on(playerName, playerEvent.bind(null, client));
  });
});

// Load Commands
client.commands = [];
fs.readdir(config.commandsDir, (err, files) => {
  if(err) return console.error('COMMANDS FOLDER ERROR:', err);
  files.forEach(f => {
    if(f.endsWith(".js")) {
      try {
        const props = require(`${config.commandsDir}/${f}`);
        client.commands.push({
          name: props.name,
          description: props.description,
          options: props.options
        });
      } catch(err) {
        console.error('COMMAND LOAD ERROR:', err);
      }
    }
  });
});

// Login
let token = config.TOKEN || process.env.TOKEN;
if (!token) {
  try { token = fs.readFileSync('token.txt', 'utf-8').trim(); } 
  catch (err) { console.log('TOKEN FILE MISSING❌'); }
}
if (!token) return console.log('TOKEN NOT FOUND❌');
client.login(token).catch(e => console.log('TOKEN ERROR❌', e));

// MongoDB Connect
if (config.mongodbURL || process.env.MONGO) {
  mongoose.connect(config.mongodbURL || process.env.MONGO)
    .then(() => console.log('| 🍔 Connected MongoDB!'))
    .catch(err => console.error('| 🍔 Failed to connect MongoDB!', err));
} else {
  console.log('| 🍔 Error MongoDB!');
}

// Express Server
const app = express();
const port = 3000;
app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
const url = process.env.REPL_SLUG ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : `http://localhost:${port}`;
app.listen(port, () => console.log(`🔗 Listening to RTX: ${url}`));

// Watermark
printWatermark();
