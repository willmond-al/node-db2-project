
exports.up = function(knex) {
    return knex.schema.table("cars", table => {
        table.text("transmission_type")
        table.text("status")
    })
};

exports.down = function(knex) {
    return knex.schema.table("cars", table => {
        table.dropColumn("transmission_type")
        table.dropColumn("status")
    })
};
// exports.down = function(knex) {
//     return knex.schema.table("cars", table => {
//         table.dropColumn("transmission type")
//     })
// };
