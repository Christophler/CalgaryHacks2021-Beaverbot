const CommandBase = require('./command_base');
const {registerProfile} = require('../sql/sql_util');
const unis = require('DIRECTORY_TO_JSON').universities;

class RegisterCommand extends CommandBase {
        // Usage: !register <first_name> <last_name> <uni_tag>
        // Example: !register Jeremy Tubongbanua uoft
        constructor(){
            super(['register']);
        }

        run(message, args){

        const first = args[0];
        const last = args[1];
        const uniTag = args[2];
        //const discordId = ? // find through Message object on discord (see Discord.js docs on Message)
        if (args.length == 3){

        // call registerProfile()
            const first = args[0]; 
            const last = args[1];
            const uniTag = args[2];
            const discordId = message.member.user.tag // find through Message object on discord (see Discord.js docs on Message)

            registerProfile(discordId, first, last, uniTag);
        }

    }

}


module.exports = RegisterCommand;