var {query, faunadb} = require('faunadb');
var q = query;
var client = new faunadb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });

client.query(
    q.Create (
        q.Collection('profiles'),
        {data: data},
    )
)
.then((ret) => {
    console.log(ret);
})

function registerUniversity(university, tag) {
    
}