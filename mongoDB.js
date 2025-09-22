/*

/*
███████╗███╗░░░███╗
██╔════╝████╗░████║
█████╗░░██╔████╔██║
██╔══╝░░██║╚██╔╝██║
███████╗██║░╚═╝░██║
╚══════╝╚═╝░░░░░╚═╝

   
   # MADE BY EM OFFICIAL TEAM!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/tUrzH6J3dN ]
   ## YT : https://www.youtube.com/@emofficial1234?si=6sSC9Oim-F1mF2CM
*/

const { Schema, model } = require("mongoose");

// Guild Music Bot Settings
const musicbot = Schema({
  guildID: String,
  role: String,
  language: String,
  channels: Array,
});

// User Playlist Schema
const playlist = Schema({
  userID: String,
  playlist: Array,
  musics: Array,
});

module.exports = {
  musicbot: model("musicbot", musicbot),
  playlist: model("playlist", playlist)
};

/*

/*
███████╗███╗░░░███╗
██╔════╝████╗░████║
█████╗░░██╔████╔██║
██╔══╝░░██║╚██╔╝██║
███████╗██║░╚═╝░██║
╚══════╝╚═╝░░░░░╚═╝


   
   # MADE BY EM OFFICIAL TEAM!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/tUrzH6J3dN ]
   ## YT : https://www.youtube.com/@emofficial1234?si=6sSC9Oim-F1mF2CM
*/
