exports.up = function(knex) {
    return knex.schema.createTable('classes', tbl => {
        tbl.increments();
        tbl.string('title',128).unique().notNullable();
        tbl.string('description',128).notNullable();
        tbl.string('type',128).notNullable();
        tbl.date('start').notNullable();
        tbl.string('location', 128).notNullable();
        tbl.string('intensity', 128).notNullable();
        tbl.integer('current_attendees').notNullable();
        tbl.integer('max_class').notNullable();
        tbl.integer('instructor_id')
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
