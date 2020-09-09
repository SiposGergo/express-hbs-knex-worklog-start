
exports.up = function(knex) {
  return knex.schema.createTable('worklog', table => {
    table.increments();
    table.string('from').notNull();
    table.string('to').notNull();
    table.integer('duration').unsigned().notNull();
    table.integer('ticket_id').unsigned().references('id').inTable('ticket');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('worklog');
};
