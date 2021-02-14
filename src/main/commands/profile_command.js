

const CommandBase = require('./command_base');
const {getProfile} = require('../sql/sql_util');


class ProfileCommand extends CommandBase {

    constructor() {
        super(['pf', 'profile']);
    }

    run(message, args) {
        console.log(args[0],"\n");
        const id = args[0].substring(3, args.length - 1);

        getProfile(id).then((ret) => {
            const data = ret.data;
            console.log(data.firstName);
            console.log(data.lastName);
            console.log(data.university);
        }).catch((err) => {
            console.log(message.member.user.tag);
            console.log(id);
            console.log("Discord ID not found");
        });
        }
        /**
         * Smaple usages:
         * 
         *  !profile - check own profile
         *  !profile @henree#12334 - checks henree#12334's profile
         */


}

module.exports = ProfileCommand;