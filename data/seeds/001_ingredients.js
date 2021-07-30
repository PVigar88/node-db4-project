exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "milk" },
        { ingredient_name: "egg(s)" },
        { ingredient_name: "butter" },
        { ingredient_name: "bacon" },
      ]);
    });
};
