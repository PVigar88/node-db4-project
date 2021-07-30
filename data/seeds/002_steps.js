exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { step_instruction: "add milk" },
        { step_instruction: "crack egg(s)" },
        { step_instruction: "whip Butter" },
        { step_instruction: "fry bacon" },
        { step_instruction: "melt butter" },
        { step_instruction: "mix in wet ingredients" },
        { step_instruction: "stir" },
        { step_instruction: "Cook" },
        { step_instruction: "pre-heat pan" },
      ]);
    });
};
