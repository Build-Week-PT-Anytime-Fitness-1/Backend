exports.up = function(knex) {
    return knex.schema.createTable('classes', tbl => {
        tbl.increments();
        tbl.string('title',128).unique().notNullable();
        tbl.string('description',128).notNullable();
        tbl.string('type',128).notNullable();
        tbl.integer('trainer_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classes');
};
