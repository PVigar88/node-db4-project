exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "milk", quantity: 0.5 },
        { ingredient_name: "egg(s)", quantity: 2 },
        { ingredient_name: "butter", quantity: 0.75 },
        { ingredient_name: "bacon", quantity: 3 },
      ]);
    });
};
