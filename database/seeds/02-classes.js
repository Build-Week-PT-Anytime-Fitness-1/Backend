

exports.seed = function (knex) {
  return knex('classes').truncate()
    .then(function () {
      return knex('classes').insert([
        {id: 1, title: 'Get Ripped', description:'This event will take place in the park and cost $15.00 to participate', type:'weightlifting', instructor_id:1},
        {id: 2, title: 'Nirvana Awaits', description:'This event will take place in the park and cost $5.00 to participate', type:'yoga', instructor_id:1},
        {id: 3, title: 'Billy Blanks Who?', description:'This event will take place in the park and cost $12.00 to participate', type:'insanity', instructor_id:1},
        {id: 4, title: 'It actually works!', description:'This event will take place in the park and cost $5.00 to participate', type:'pilates', instructor_id:2}
      ]);
    });
};
