const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
});


bot.on("message", (message) => {
    if(message.author.bot) return; // terminate if the message sent was from the bot.

    const embed = {
        "title": "University of Toront",
        "description": "Discord Server Link:",
        "color": 99999,
        "timestamp": "2021-02-13T20:29:35.728Z",
        "fields": [
            {
                "name": "Programs",
                "value": "Computer Science"
              },
              {
                "name": "😱",
                "value": "try exceeding some of them!"
              },
              {
                "name": "🙄",
                "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
              },
              {
                "name": "<:thonkang:219069250692841473>",
                "value": "these last two",
                "inline": true
              },
              {
                "name": "<:thonkang:219069250692841473>",
                "value": "are inline fields",
                "inline": true
              }
        ]
    };

    message.channel.send({embed});

});

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');