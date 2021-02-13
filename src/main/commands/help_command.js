const CommandBase = require('./command_base');

class HelpCommand extends CommandBase {

    constructor() {
        super('help');
    }

    run(message, args) {
        const embed = {
            "title": "Video Tutorial",
            "description": " ```\nThis is a menu that contains all the basic commands associated with this bot```",
            "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "color": 61795,
            "timestamp": "2021-02-13T20:40:40.974Z",
            "footer": {
            "icon_url": "https://www.pikpng.com/pngl/m/519-5198443_faq-comments-transparent-tutorial-icon-png-clipart.png",
            "text": "Oonga boonga"
            },
            "thumbnail": {
            "url": "https://i.redd.it/iniwwqe8pilz.jpg"
            },
            "image": {
            "url": "https://www.mypokecard.com/en/Gallery/my/galery/KmbFZqszuLxZ.jpg"
            },
            "author": {
            "name": "Basic Commands",
            "icon_url": "https://www.cheatsheet.com/wp-content/uploads/2020/09/friends-cast-couch.jpg"
            },
            "fields": [
            {
                "name": "!help",
                "value": "Opens this menu"
            },
            {
                "name": "!register",
                "value": "Allows you to enter your social media accounts in order to connect with others!"
            },
            {
                "name": "!findserver <university> <program>",
                "value": "Finds the discord servers associated with that university and specified program"
            },
            {
                "name": "!programs <university>",
                "value": "Lists the programs available at that university"
            },
            {
                "name": "!profile <@user>",
                "value": "Lists the social media accounts associated with that user"
            },
            {
                "name": "!find <university/program/club>",
                "value": "Lists the associated information about the university/program/club that you are searching for"
            }
            ]
        };
        message.channel.send({embed});
    }

}