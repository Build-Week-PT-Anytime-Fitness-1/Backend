const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('clients').select('id', 'username');
}

function findBy(filter) {
  return db('clients').where(filter);
}

async function add(client) {
  const [id] = await db('clients').insert(client);

  return findById(id);
}

function findById(id) {
  return db('clients')
    .where({id})
    .first();
}
