var {query, faunadb} = require('faunadb');
var q = query;
var client = new faunadb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });

const name = "jeremy#7970"

const data = {
    title: "hello world",
    description: "uiniversity of toronto kms"
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