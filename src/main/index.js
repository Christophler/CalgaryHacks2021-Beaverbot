const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
});


bot.on("message", (message) => {
    if(message.author.bot) return; // terminate if the message sent was from the bot.

    const embed = {
        "title": "Title",
        "description": "Jeremy was here",
        "color": 99999,
        "timestamp": "2021-02-13T20:29:35.728Z",
        "fields": []
    };

    message.channel.send({embed});

});

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');