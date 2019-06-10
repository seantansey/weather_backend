

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hot').del()
    .then(function () {
      // Inserts seed entries
      return knex('hot').insert([
        {
          id: 1,
          item: 'T-shirt',
          price: 15.99
        },
        {
          id: 2,
          item: 'Jean Shorts',
          price: 102.99
        },
        {
          id: 3,
          item: 'Flip-flops',
          price: 150.99
        },
        {
          id: 4,
          item: 'Board Shorts',
          price: 74.99
        },
        {
          id: 5,
          item: 'Bikini',
          price: 10.99
        },
        {
          id: 6,
          item: 'Shorts',
          price: 15.99
        },
        {
          id: 7,
          item: 'Tank Top',
          price: 17.99
        },
        {
          id: 8,
          item: 'Fanny Pack',
          price: 75.99
        },
        {
          id: 9,
          item: 'Jesus Sandals',
          price: 78.99
        },
        {
          id: 10,
          item: 'Light pants',
          price: 15.99
        }
      ])
      .then(() => {
      return knex.raw(
        `SELECT setval('hot_id_seq', (SELECT MAX(id) FROM hot));`
      )
    })
    });
};
