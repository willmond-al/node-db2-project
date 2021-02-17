
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 239 , make: 'Ferrari', model: "enzo"},
        {vin: 132 , make: 'Lamborghini', model: "ventador"},
        {vin: 309 , make: 'Maserati', model: "X"}
      ]);
    });
};
