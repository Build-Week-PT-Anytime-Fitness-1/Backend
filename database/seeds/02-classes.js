

exports.seed = function (knex) {
  return knex('classes').truncate()
    .then(function () {
      return knex('classes').insert([
        {\ title: 'Get Ripped', description:'This event will take place in the park and cost $15.00 to participate', type:'weightlifting', start: '1/20/20', location: 'crossfit room', intensity: 'hiit', current_attendees: 2, max_class: 10, user_id:1}
      ]);
    });
};
