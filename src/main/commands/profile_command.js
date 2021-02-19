

const CommandBase = require('./command_base');
const {getProfile} = require('../sql/sql_util');
const faundb = require('faunadb');
const client = new faundb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });
const q = faundb.query;
const uuid = require('uuid');

class ProfileCommand extends CommandBase {

    constructor() {
        super(['pf', 'profile']);
    }

    run(message, args) {
        // console.log(args[0],"\n");
        // const id = args[0].substring(3, args.length - 1);

        // getProfile(id).then((ret) => {
        //     const data = ret.data;
        //     console.log(data.firstName);
        //     console.log(data.lastName);
        //     console.log(data.university);
        // }).catch((err) => {
        //     console.log(message.member.user.tag);
        //     console.log(id);
        //     console.log("Discord ID not found");
        // });
        /**
         * Smaple usages:
         * 
         *  !profile - check own profile
         *  !profile @henree#12334 - checks henree#12334's profile
         */

        const id = args[0].substring(3, args[0].length-1);
        const indexName = uuid.v4().toString();

        client.query(
            q.CreateIndex(
                {
                    name: indexName,
                    source: q.Collection('profiles'),
                    terms: [{field: ['data', 'discordId']}]
                }
            )
        ).then((z) => {
            client.query(
                q.Get(
                    q.Match(q.Index(indexName), id.toString())
                )
            ).then((ret) => {
                const data = ret.data;
                const embed = {
                    "title": data.firstName + "'s Profile:",
                    "description": data.firstName + " " + data.lastName,
                    "color": 123213,
                    "fields": [
                      {
                        "name": "University",
                        "value": data.university,
                        "inline": true
                      },
                      {
                        "name": "Graduating Year",
                        "value": "2024",
                        "inline": true
                      }
                    ]
                  };
                message.channel.send(message.author.toString(), {embed});
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });


    }

}

module.exports = ProfileCommand;