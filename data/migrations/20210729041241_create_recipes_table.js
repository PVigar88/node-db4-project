exports.up = function (knex) {
  return knex.schema.createTable("recipes", (tbl) => {
    tbl.increments();
    tbl.string("recipe_name").notNullable().unique();
    tbl.dateTime("created_at").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipes");
};
