
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {

  tbl.increments();
  tbl.string('username', 128).unique().notNullable();
    tbl.string('password', 256).notNullable();
    tbl.string('user_type');
    tbl.boolean('isInstructor');
  })
  .createTable('classes', tbl => {

  tbl.increments();
  tbl.string('title', 256).notNullable();
  tbl.string('description').notNullable();
  tbl.string('type').notNullable();
  tbl.string('start').notNullable();
  tbl.string('location').notNullable();
  tbl.string("intensity").notNullable();
  tbl.integer('current_attendees').defaultTo(0);
  tbl.integer('max_class');
  tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
};
