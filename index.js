const config = require('./config.js');
const { readFileSync } = require('fs');
if(config.shardManager.shardStatus == true){

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: config.TOKEN || process.env.TOKEN || readFileSync('token.txt', 'utf-8') });
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();

} else {

require("./bot.js")

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
