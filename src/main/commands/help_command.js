const CommandBase = require('./command_base');

class HelpCommand extends CommandBase {

    constructor() {
        super(['help', 'h', 'he']);
    }

    run(message, args) {
        const embed = {
            "title": "BeaverBot",
            "description": "This is a menu that contains all the basic commands associated with this bot",
            "color": 61795,
            "fields": [
            {
                "name": "!help",
                "value": "Opens this menu",
                "inline": false
            },
            {
                "name": "!register <firstName> <lastName> <uni> <gradYear>",
                "value": "Register yourself to get recommended servers!",
                "inline": false
            },
            {
                "name": "!profile <@user>",
                "value": "Gives you info on the user",
                "inline": false
            },
            {
                "name": "!recommended",
                "value": "Gives you recommended discord servers",
                "inline": false
            }
            ]
        };
        message.channel.send({embed});
    }

}

module.exports = HelpCommand;