const CommandBase = require("./command_base");
const unis = {UofT:{servers:[{serverName:"University of Toronto League of Legends",discordLink:"https://discord.gg/wXYhPX9VTW",imageURL:"https://cdn.discordapp.com/icons/442735655382941696/c3a6fe78b991b9c725b6086f7dc43a56.webp?size=128",description:"The main League of Legends discord server for UofT"},{serverName:"Computer Science Enrichment",discordLink:"https://discord.gg/7UpsrAxNqE",imageURL:"https://cdn.discordapp.com/icons/359875920733011968/a_8a06e0519edec8bd3672b5b96cc0ebae.webp?size=128",description:"The main UofT computer science discord server"}]},UoG:{servers:[{serverName:"Guelph Common Room",discordLink:"https://discord.gg/Au8Ckc5FZ9",imageURL:"https://cdn.discordapp.com/icons/713543596669665310/839e064d29f4e9ad0de3afe8c1aa2d05.webp?size=128",description:"The main Guelph discord server"},{serverName:"Bachelor of Computing",discordLink:"https://discord.gg/Ew382uW",imageURL:"https://cdn.discordapp.com/icons/486633949154770944/ca930751929f24ec732a4a7e4d24eb9c.webp?size=128",description:"All things computer science & mathematics related UoG server"},{serverName:"UofG Engineering Class of '24",discordLink:"https://discord.gg/DuGYfd6CC9",imageURL:"https://cdn.discordapp.com/icons/720732211648921600/f73d43a5cb394b89041185fbb9a8034f.webp?size=128",description:"The main UoG engineering discord server for the graduating class of 2024"}]},QU:{servers:[{serverName:"Queen's University",discordLink:"https://discord.gg/FRYz8GwY3G",imageURL:"https://cdn.discordapp.com/icons/453762054571032578/451346c503eb622fad454bd8ff406f1b.webp?size=128",description:"Main Queen's discord server"},{serverName:"Queen's Comp Sci 2024",discordLink:"https://discord.gg/vZd7gpQ5xQ",imageURL:"https://cdn.discordapp.com/icons/710666189902184498/003dd8161b2428ba242af86cac87ba91.webp?size=128",description:"Queen's computer science discord server"},{serverName:"Queen's Esports Association",discordLink:"https://discord.gg/qea",imageURL:"https://cdn.discordapp.com/icons/228353606946914304/e2abac2afee97899d55b6b324952990d.webp?size=128",description:"The main esports discord server for Queen's"}]},RyeU:{servers:[{serverName:"Ryerson University",discordLink:"https://discord.gg/9cCUGnyyMU",imageURL:"https://cdn.discordapp.com/icons/593283297577271327/bb457dde4d6f9749dcfa5614b9abe337.webp?size=128",description:"The main Ryerson discord"},{serverName:"RU Anime",discordLink:"https://discord.gg/2BYZrHrhDs",imageURL:"https://cdn.discordapp.com/icons/325047162327138307/c1648127c4d8d32e7b07370344c70c4e.webp?size=128",description:"Main Ryerson Anime discord server"},{serverName:"Ryerson 2024",discordLink:"https://discord.gg/nuzAH3k2ps",imageURL:"https://cdn.discordapp.com/icons/710921537087209634/99e136ca1cc717bbd89a3a7769777788.webp?size=128",description:"Ryerson class of 2024 discord server"}]}};
const faundb = require('faunadb');
const client = new faundb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });
const q = faundb.query;
const uuid = require('uuid');


class RecommendedCommand extends CommandBase {
    constructor() {
        super(['recommended']);
    }

    run(message, args) {

        const indexName = uuid.v4().toString();
        const id = message.author.id;

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
                // build fields
                // const fields = [];
                // for(var i in unis[data.university].servers) {
                //     const servData = unis[data.university].servers[i];
                //     fields.append({
                //         name: servData.serverName,
                //         value: ("Link" + servData.discordLink + "\n"),
                //         inline: true
                //     })
                // }
                // const embed = {
                //     "title": "Recommended Discord Servers:",
                //     "description": "organized by your profile",
                //     "color": 123213,
                //     "fields": unis[data.university].servers
                //   };
                // message.channel.send(message.author.toString(), {embed});
                message.channel.send("Hi, " + message.author.toString() + "! Based on your University info, we've found some discord servers you might like:");
                for(var i in unis[data.university].servers) {
                    const servData = unis[data.university].servers[i];
                    const servName = servData.serverName;
                    const discordLink = servData.discordLink;
                    const imageUrl = servData.imageURL;
                    const desc = servData.description;

                    const embed = {
                        "title": servName,
                        "description": desc,
                        "url": discordLink,
                        "color": 913911,
                        "author": {
                          "name": servName,
                          "url": discordLink,
                          "icon_url": imageUrl
                        },
                    };
                    message.channel.send({embed});
                }
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    }

}

module.exports = RecommendedCommand;