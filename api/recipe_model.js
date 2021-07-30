const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  const RecipeSteps = await db(
    db("recipe_steps as RS")
      .where("RS.recipe_id", recipe_id)
      .leftJoin("recipes as R", "RS.recipe_id", "R.id")
      .leftJoin("steps as S", "RS.step_id", "S.id")
  ).leftJoin(
    db(
      db("step_ingredients as SI")
        .leftJoin("steps as S", "S.id", "SI.step_id")
        .leftJoin("ingredients as I", "I.id", "SI.ingredient_id")
    )
  );

  return RecipeRows;
}

module.exports = {
  getRecipeById,
};
