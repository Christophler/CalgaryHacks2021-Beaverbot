const Discord = require("discord.js");
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Ready!');
});

bot.on("message", (message) => {
    if(message.author.bot) return; // terminate if the message sent was from the bot.

    const raw = message.content;
    /**
     * lemon
     * jeremy tajsdfkljas
     * christopher was here
     * !help
     * !register
     * !my_command asd d d d 1
     * > {}
     */

    // !Lemon 123 henry
    const command = {
        name: "Lemon",
        args: ['123', 'henry']
    }


});

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');