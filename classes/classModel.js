const db = require('../database/dbConfig');

module.exports = {
  getClasses,
  getClassesById,
  addClass,
  getClassesFilter,
  updateClass,
  deleteClass,
  updateClassSize
};

function getClasses() {
  return db('classes');
}

function addClass(post) {
  return db('classes as c')
    .insert(post, 'id')
    .then(ids => {
      console.log('ADD CLASS', ids)
      const [id] = ids;
      return getClassesById(id);
    })
}

function getClassesById(id) {
  return db('classes')
    .select('*')
    .where({id})
    .first()
}

async function updateClass(id, changes) {
  await db('classes')
  .where({id})
  .update(changes)

  return getClassesById(id);
}

async function updateClassSize(id, changes) {
  await db('classes')
  .where({id})
  .update(changes)

  return db('classes')
  .select('current_attendees')
  .where({id})
  .first()
}

function deleteClass(id) {
  return db('classes')
  .where('id', id)
  .delete()
}

function getClassesFilter(filter) {
  return db('classes')
  .select('*')
  .where('user_id', filter)
}
