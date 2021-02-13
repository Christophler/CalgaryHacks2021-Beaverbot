const { query } = require('faunadb');
var faunadb = require('faunadb');
var q = query;
var client = new faunadb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });

client.query(
    q.Create(
        q.Collection('profiles'),
        {data: {title: "Hello there"}},
    )
)
.then((ret) => {
    console.log(ret);
})