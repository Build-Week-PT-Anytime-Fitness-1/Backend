const bcrypt = require('bcrypt');

exports.seed = function (knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        { username: "Trainer1", password: bcrypt.hashSync("password", 16), isInstructor:true, user_type: 'user' },
        { username: "Trainer2", password: bcrypt.hashSync("password", 16), isInstructor:true, user_type: 'user' },
        { username: "Client1", password: bcrypt.hashSync('password', 16), isInstructor:false, user_type: 'user'}
      ]);
    });
};
