const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
});


bot.on("message", (message) => {
    if(message.author.bot) return; // terminate if the message sent was from the bot.


});

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');