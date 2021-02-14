const Discord = require("discord.js");
const bot = new Discord.Client();

const HelpCommand = require('./commands/help_command');
const RegisterCommand = require('./commands/register_command');
const commands = [new HelpCommand(), new RegisterCommand()];

bot.once('ready', () => {
    console.log('Ready!');
});

bot.on("message", (message) => {
    if(message.author.bot) return; // terminate if the message sent was from the bot.

    const raw = message.content;
    
    if (raw.charAt(0) === '!' && raw.length > 1){//Process raw starts here
        const msg_in = raw.split(" "); //array [!command, a, b, c, d]
        msg_in[0] =msg_in[0].replace("!", ""); //remove !
        const cmd_name = msg_in[0]
        msg_in.shift(); //remove command name with remaining args left

        const command = {
            name: cmd_name,
            args: msg_in
        }
        //Message array output (command) ends here
        for(var i in commands) {
            const cmd = commands[i]
            if(cmd.names.includes(command.name)) {
                cmd.run(message, command.args);
                break;
            }
        }
    }
    
});

bot.login('ODEwMjI1MzMwMjgyOTU0Nzky.YCgjIw.k2u4fW0dBIk8CkpbQYZKMgXA5Oc');