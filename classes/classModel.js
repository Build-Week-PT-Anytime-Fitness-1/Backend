const db = require('../database/dbConfig');

module.exports = {
  find,
  findByType,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('classes');
}

function findByType(type) {
  return db('classes').where({ type });
}

function findById(id) {
  return db('classes')
    .where({ id })
    .first();
}

function add(post) {
    return db('classes')
      .insert(post)
      .then(ids => {
        return findById(ids[0]);
      });
  }


function update(id, changes) {
    return db('classes')
        .where({ id })
        .update(changes);
    }

function remove(id) {
    return db('classes')
        .where('id', id)
        .del();
    }
