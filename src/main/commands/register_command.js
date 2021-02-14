

const CommandBase = require('./command_base');
const {registerProfile} = require('../sql/sql_util');

class RegisterCommand extends CommandBase {

    constructor() {
        super(['register']);
    }

    run(message, args) {

        // 1. make sure command is not wrongfully used (eg: !register asd asd asd asd asd asd <- too many args!)

        // Usage: !register <first_name> <last_name> <uni_tag>
        // Example: !register Jeremy Tubongbanua uoft

        const first = args[0];
        const last = args[1];
        const uniTag = args[2];
        //const discordId = ? // find through Message object on discord (see Discord.js docs on Message)

        // call registerProfile()


    }

}
