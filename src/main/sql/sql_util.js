const faundb = require('faunadb');
const client = new faundb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });
const q = faundb.query;
const fs = require('fs');

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

function registerProfile(discordId, discordTag, firstName, lastName, universityTag, graduatingYear) {
    /**
     * Usage Example:
     *  registerProfile("1231231241", "Jeremy#7970", "Jeremy", "Tubongbanua", "uoft");
     */
    const data = {
        discordId: discordId,
        discordTag: discordTag,
        firstName: firstName,
        lastName: lastName,
        university: universityTag,
        graduatingYear: graduatingYear
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
    const newIndex = require('./indices.json').currentIndex + 1;
    fs.writeFile('indices.json', JSON.stringify({currentIndex: newIndex}), 'utf-8', (err) => {
        // console.log(err);
    });
    client.query(
        q.CreateIndex(
            {
                name: newIndex.toString(),
                source: q.Collection('profiles'),
                terms: [{field: ['data', 'discordId']}]
            }
        )
    ).then((ret) => {

    }).catch((err) => {
        console.log(err);
    });
    return client.query(
        q.Get(
            q.Match(q.Index((newIndex-1).toString()), discordId.toString())
        )
    );
}

module.exports.registerProfile = registerProfile;
module.exports.registerUniversity = registerUniversity;
module.exports.getProfile = getProfile;

