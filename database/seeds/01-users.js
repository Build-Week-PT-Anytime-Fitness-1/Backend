const bcrypt = require('bcrypt')

exports.seed = function (knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: "Trainer1", password: bcrypt.hashSync("password", 16), isTrainer:true },
        { id: 2, username: "Trainer2", password: bcrypt.hashSync("password", 16), isTrainer:true },
        { id: 3, username: "Client1", password: brypt.hashSync('password', 16), isTrainer:true}
      ]);
    });
};
