const worklogs = require('./assets/worklogs.json');

exports.seed = async (knex) => {
  await  knex('worklog').del();
  await knex('worklog').insert(worklogs);
}