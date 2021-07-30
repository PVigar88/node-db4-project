exports.up = function (knex) {
  return knex.schema.createTable("step_ingredients", (tbl) => {
    tbl.increments();
    tbl
      .integer("step_id")
      .unsigned()
      .references("steps.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("ingredients.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("step_ingredients");
};
