

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mild').del()
    .then(function () {
      // Inserts seed entries
      return knex('mild').insert([
        {
          id: 1,
          item: 'Sweatshirt',
          price: 15.99
        },
        {
          id: 2,
          item: 'Jeans',
          price: 102.99
        },
        {
          id: 3,
          item: 'Light Jacket',
          price: 150.99
        },
        {
          id: 4,
          item: 'Rain Jacket',
          price: 74.99
        },
        {
          id: 5,
          item: 'Socks',
          price: 10.99
        },
        {
          id: 6,
          item: 'Shirt',
          price: 15.99
        },
        {
          id: 7,
          item: 'Hat',
          price: 17.99
        },
        {
          id: 8,
          item: 'Under Armor',
          price: 75.99
        },
        {
          id: 9,
          item: 'Shoes',
          price: 78.99
        },
        {
          id: 10,
          item: 'Umbrella',
          price: 15.99
        }
      ])
      .then(() => {
      return knex.raw(
        `SELECT setval('mild_id_seq', (SELECT MAX(id) FROM mild));`
      )
    })
    });
};
