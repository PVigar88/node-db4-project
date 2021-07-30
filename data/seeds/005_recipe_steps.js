exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_steps").insert([
        { recipe_id: 1, step_id: 9, step_number: 1 },
        { recipe_id: 1, step_id: 2, step_number: 2 },
        { recipe_id: 1, step_id: 7, step_number: 3 },
        { recipe_id: 1, step_id: 8, step_number: 4 },
        { recipe_id: 2, step_id: 9, step_number: 1 },
        { recipe_id: 2, step_id: 2, step_number: 2 },
        { recipe_id: 2, step_id: 7, step_number: 3 },
        { recipe_id: 2, step_id: 4, step_number: 4 },
      ]);
    });
};
// tbl
//   .integer("recipe_id")
//   .unsigned()
//   .references("recipes.id")
//   .notNullable()
//   .onDelete("CASCADE")
//   .onUpdate("CASCADE");
// tbl
//   .integer("step_id")
//   .unsigned()
//   .references("steps.id")
//   .notNullable()
//   .onDelete("CASCADE")
//   .onUpdate("CASCADE");
// tbl.integer("step_number").unsigned().notNullable;
