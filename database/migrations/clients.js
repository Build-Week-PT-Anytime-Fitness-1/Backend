exports.up = function(knex) {
  return knex.schema.createTable('clients', clients => {
    clients.increments();

    clients
      .string('username', 255)
      .notNullable()
      .unique();
    clients.string('password', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clients');
};
