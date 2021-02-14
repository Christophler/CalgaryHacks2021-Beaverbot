var faundb = require('faunadb');
var client = new faundb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });
var q = faundb.query;

function registerUniversity(universityName, tag) {
    const data = {
        name: universityName,
        tag: tag,
        programs: [
            "Agriculture & Natural Resources Conservation", "Architecture", "Area, Ethnic & Multidisciplinary Studies", 
            "Arts: Visual & Performing", "Business", "Communications", "Community, Family & Personal Services", "Computer Science & Mathematics", 
            "Education", "Engineering", "English & Foreign Languages", "Health Sciences & Technologies", "Philosophy, Religion & Theology", 
            "Repair, Production & Construction", "Sciencess: Biological & Physical", "Social Sciences & Law"
        ]
    }

    client.query(
        q.Create (
            q.Collection('universities'),
            {data: data},
        )
    )
    .then((ret) => {
        console.log(ret);
    })
}

function registerProfile(discordId, firstName, lastName, universityTag) {
    const data = {
        discord_id: discordId,
        firstName: firstName,
        lastName: lastName,
        university: universityTag
    }

    client.query(
        q.Create(
            q.Collection('profiles'),
            {data: data}
        )
    )
    .then((ret) => {
        console.log(ret);
    })
}

function getProfile(discordId) {
    return client.query(
        q.CreateIndex({
          name: 'del',
          source: q.Collection('profiles'),
          values: [{field: ['data', 'discord_id']}, {field: ['data', 'university']}],
          terms: [{ field: ['data', 'discord_id'] }]
        })
      );
    //   .then((ret) => console.log(ret));
    
    //   client.query(
    //     q.Get(
    //       q.Match(q.Index('123'), 'Jeremy Tubongbanua')
    //     )
    //   )
    //   .then((ret) => console.log(ret))
}

module.exports.registerProfile = registerProfile;
module.exports.registerUniversity = registerUniversity;
module.exports.getProfile = getProfile;

