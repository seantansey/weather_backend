
exports.up = function(knex, Promise) {
  return knex.schema.createTable('mild', (table) => {
    table.increments()
    table.string('item').notNullable('').defaultTo('')
    table.decimal('price').notNullable('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mild')
};
