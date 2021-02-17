
exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
      table.increments()
      table.mediumint("vin").unique()
      table.text("make")
      table.text("model")
      table.mediumint("mileage")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
