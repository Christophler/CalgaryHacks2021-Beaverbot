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
    /**
     * Usage Example:
     *  registerProfile("Jeremy#7970", "Jeremy", "Tubongbanua", "uoft");
     */
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
    /**
     * Usage Example
     * getProfile("Jeremy#7970").then((ret) => {
     *  const data = ret.data;
     *  console.log(data.firstName);
     * }).catch((err) => {
     *  // discord id not found
     * });
     */
    return client.query(
        q.Get(
            q.Match(q.Index('del'), discordId)
        )
    );
}

module.exports.registerProfile = registerProfile;
module.exports.registerUniversity = registerUniversity;
module.exports.getProfile = getProfile;

