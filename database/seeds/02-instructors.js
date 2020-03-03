const bcrypt = require('bcrypt')

exports.seed = function (knex) {
  return knex('instructors').truncate()
    .then(function () {
      return knex('instructors').insert([
        { username: "instructor", password: bcrypt.hashSync("instructor", 16) },
        { username: "testinstructor", password: bcrypt.hashSync("test", 16) }
      ])
    })
}
