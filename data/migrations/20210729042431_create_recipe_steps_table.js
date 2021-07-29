exports.up = function (knex) {
  return knex.schema.createTable("recipe_steps", (tbl) => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("recipes.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("step_id")
      .unsigned()
      .references("steps.id")
      .notNullable()
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.integer("step_number").unsigned().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("srecipe_steps");
};
