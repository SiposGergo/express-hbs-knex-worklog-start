
exports.up = function(knex) {
  return knex.schema.createTable('ticket', (table) => {
    table.increments();
    table.string('name').notNull();
    table.text('description').notNull();
    table.integer('estimation').unsigned().notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ticket');
};
