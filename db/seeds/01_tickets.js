const tickets = require('./assets/tickets.json');

exports.seed = async (knex) => {
  await knex('ticket').del();
  await knex('ticket').insert(tickets);
}