

const CommandBase = require('./command_base');

class ProfileCommand extends CommandBase {

    constructor() {
        super(['pf', 'profile']);
    }

    run(message, args) {

        /**
         * Smaple usages:
         * 
         *  !profile - check own profile
         *  !profile @henree#12334 - checks henree#12334's profile
         */

        const ownDiscordId = message.author.id;
        var desiredDiscordId = "";

    }

}

module.exports = ProfileCommand;