var faunadb = require('faunadb'), q = faunadb.query;
var client = new faunadb.Client({ secret: 'fnAEB9705sACAlJREYUIpnkqRK-W5SNwPlmXhl4b' })

var createP = client.query(
    q.Create(
      q.Collection('test'),
      { data: { testField: 'testValue' } }
    )
  )