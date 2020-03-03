exports.up = function(knex) {
  return knex.schema.createTable('clients', instructors => {
    instructors.increments();

    instructors
      .string('username', 255)
      .notNullable()
      .unique();
    instructors.string('password', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructors');
};
