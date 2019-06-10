
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cold').del()
    .then(function () {
      // Inserts seed entries
      return knex('cold').insert([
        {
          id: 1,
          item: 'Gloves',
          price: 15.99
        },
        {
          id: 2,
          item: 'Snow pants',
          price: 102.99
        },
        {
          id: 3,
          item: 'Jacket',
          price: 150.99
        },
        {
          id: 4,
          item: 'Sweater',
          price: 74.99
        },
        {
          id: 5,
          item: 'Wool Socks',
          price: 10.99
        },
        {
          id: 6,
          item: 'Mittons',
          price: 15.99
        },
        {
          id: 7,
          item: 'Beanie',
          price: 17.99
        },
        {
          id: 8,
          item: 'Under Armor',
          price: 75.99
        },
        {
          id: 9,
          item: 'Boots',
          price: 78.99
        },
        {
          id: 10,
          item: 'Long Johns',
          price: 15.99
        }
      ])
      .then(() => {
      return knex.raw(
        `SELECT setval('cold_id_seq', (SELECT MAX(id) FROM cold));`
      )
    })
    });
};
