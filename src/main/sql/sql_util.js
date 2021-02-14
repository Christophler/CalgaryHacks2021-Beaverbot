var {query, faunadb} = require('faunadb');
var q = query;
var client = new faunadb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });


function registerUniversity(universityName, tag2) {
    const data = {
        name: universityName,
        tag: tag2,
        programs: [
            "Agriculture & Natural Resources Conservation", "Architecture", "Area, Ethnic & Multidisciplinary Studies", 
            "Arts: Visual & Performing", "Business", "Communications", "Community, Family & Personal Services", "Computer Science & Mathematics", 
            "Education", "Engineering", "English & Foreign Languages", "Health Sciences & Technologies", "Philosophy, Religion & Theology", 
            "Repair, Production & Construction", "Sciencess: Biological & Physical", "Social Sciences & Law"
        ]
    }
}


client.query(
    q.Create (
        q.Collection('profiles'),
        {data: data},
    )
)
.then((ret) => {
    console.log(ret);
})

