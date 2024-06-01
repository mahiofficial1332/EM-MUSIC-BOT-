module.exports = {
  TOKEN: "",
  ownerID: ["1153611682250227764", ""],
  botInvite: "",
  supportServer: "https://discord.com/invite/qXM8jCsqtf",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'NotBlackness',
  commandsDir: './commands',
  language: "en",
  embedColor: "#FFC0CB",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
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
