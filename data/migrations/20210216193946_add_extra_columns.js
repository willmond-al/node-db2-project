
exports.up = function(knex) {
    return knex.schema.table("cars", table => {
        table.string("transmission type")
        table.string("status")
    })
};

exports.down = function(knex) {
    return knex.schema.table("cars", table => {
        table.dropColumn("transmission type")
        table.dropColumn("status")
    })
};
