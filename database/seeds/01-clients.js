const bcrypt = require('bcrypt')

exports.seed = function (knex) {
  return knex('clients').truncate()
    .then(function () {
      return knex('clients').insert([
        { username: "client", password: bcrypt.hashSync("client", 16) },
        { username: "testclient", password: bcrypt.hashSync("test", 16) }
      ])
    })
}
