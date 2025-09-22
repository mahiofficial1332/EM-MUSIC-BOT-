module.exports = {
  TOKEN: "",
  ownerID: ["1380183114109947924"], // Updated Owner ID
  botInvite: "",
  supportServer: "https://discord.gg/tUrzH6J3dN", // Support Server
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'NotBlackness',
  commandsDir: './commands',
  language: "en",
  embedColor: "#FFC0CB",
  errorLog: "",

  sponsor: {
    status: true,
    url: "https://www.youtube.com/@emofficial1234?si=6sSC9Oim-F1mF2CM", // YouTube
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: [''],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },
    },

    maxVol: 150,
  }
}
