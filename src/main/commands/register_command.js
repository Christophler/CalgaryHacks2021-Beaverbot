const CommandBase = require('./command_base');
const {registerProfile, getProfile} = require('../sql/sql_util');
const unis = require('../unis.json').universities;
const sqlUtil = require('../sql/sql_util');

class RegisterCommand extends CommandBase {
        // Usage: !register <first_name> <last_name> <uni_tag> <graduating_year>
        // Example: !register Jeremy Tubongbanua uoft 1
        constructor(){
            super(['register']);
        }

        run(message, args){

        if (args.length == 3){

            const first = args[0]; 
            const last = args[1];
            const uniTag = args[2];
            const year = args[3];
            const discordTag = message.member.user.tag // find through Message object on discord (see Discord.js docs on Message)
            const discordId = message.member.id

            if (unis.includes(uniTag)){
                registerProfile(discordTag, discordId, first, last, uniTag, year); 
               }
            }
        }
    }



module.exports = RegisterCommand;