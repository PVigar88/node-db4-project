exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Scrambled Eggs", created_at: "2021-07-29" },
        { recipe_name: "Eggs and Bacon", created_at: "2020-06-30" },
      ]);
    });
};

//  tbl.string("recipe_name").notNullable().unique();
//  tbl.date("created_at").notNullable();
