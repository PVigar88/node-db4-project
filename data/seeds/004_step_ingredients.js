exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("step_ingredients").insert([
        { step_id: 1, ingredient_id: 1 },
        { step_id: 2, ingredient_id: 2 },
        { step_id: 3, ingredient_id: 3 },
        { step_id: 4, ingredient_id: 4 },
      ]);
    });
};
// tbl
//   .integer("step_id")
//   .unsigned()
//   .references("steps.id")
//   .notNullable()
//   .onDelete("CASCADE")
//   .onUpdate("CASCADE");
// tbl
//   .integer("ingredient_id")
//   .unsigned()
//   .references("ingredients.id")
//   .notNullable()
//   .onDelete("CASCADE")
//   .onUpdate("CASCADE");
