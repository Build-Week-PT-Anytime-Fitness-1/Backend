exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).unique().notNullable();
        tbl.string('password').notNullable();
        tbl.boolean('isInstructor');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
