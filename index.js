const { readFileSync } = require('fs');
let config = {};

// Try to load config.js safely
try {
  config = require('./config.js');
} catch (err) {
  console.warn('⚠️  config.js not found or has an issue, using defaults.');
}

// Safely get token
let token;
try {
  token =
    (config.TOKEN || process.env.TOKEN || readFileSync('token.txt', 'utf-8')).trim();
} catch (err) {
  console.error('❌ Token not found! Please set TOKEN in config.js, environment, or token.txt');
  process.exit(1);
}

// Shard Manager status check
const shardStatus =
  config?.shardManager?.shardStatus === true ? true : false;

if (shardStatus) {
  const { ShardingManager } = require('discord.js');
  const manager = new ShardingManager('./bot.js', { token });

  manager.on('shardCreate', shard => console.log(`🚀 Launched shard ${shard.id}`));

  manager.spawn().catch(err => {
    console.error('❌ Failed to spawn shards:', err);
    process.exit(1);
  });
} else {
  try {
    require('./bot.js');
  } catch (err) {
    console.error('❌ Failed to start bot.js:', err);
    process.exit(1);
  }
}

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
   ## YT : https://youtube.com/@emofficial1234?si=6sSC9Oim-F1mF2CM
*/
