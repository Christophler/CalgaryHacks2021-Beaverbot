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

    const msg_in = raw.split(" "); //array [!command, a, b, c, d]
    msg_in[0] =msg_in[0].replace("!", ""); //remove !
    const cmd_name = msg_in[0]
    msg_in.shift(); //remove command name with remaining args left

    const command = {
        name: cmd_name,
        args: msg_in
    }
});

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');