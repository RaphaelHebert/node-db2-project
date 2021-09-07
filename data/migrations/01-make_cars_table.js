exports.up =  async function (knex) {
  knew.schema.createTable('cars', table => {
    table.increment()
    table.string('vin', 128).notNullable().unique()
    table.string('make', 128).notNullable()
    table.integer('mileage').notNullable()
    table.string('title')
    table.string('transmission')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};


