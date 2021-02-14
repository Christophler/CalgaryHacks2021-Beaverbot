var faundb = require('faunadb');
var client = new faundb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' });
var q = faundb.query;

const sqlUtil = require('./sql_util');

// const indexName = 'del';
// const discordId = "Henry#123";
// client.query(
//     q.CreateIndex({
//       name: indexName,
//       source: q.Collection('profiles'),
//     //   values: [{field: ['data', 'discord_id']}, {field: ['data', 'university']}],
//       terms: [{ field: ['data', 'discord_id'] }]
//     })
//   )
//   .then((ret) => {});

//   return client.query(
//     q.Get(
//       q.Match(q.Index(indexName), discordId)
//     )
//   )
//   .then((ret) => console.log(ret));

// sqlUtil.registerProfile("Jeremy#7970", "Jeremy", "Tubongbanua", "uoft");

sqlUtil.getProfile("190968008242495488").then((ret) => {
    console.log(ret.data);
}).catch((err) => {
    console.log(err);
})