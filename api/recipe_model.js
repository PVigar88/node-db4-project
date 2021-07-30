const db = require("../data/db-config.js");

async function getRecipeById(recipe_id) {
  const Recipe = db("recipes as R").join('recipe_steps as RS', R.id, RS.recipe_id).join('step_ingredients as SI', RS.id, SI.);
}

module.exports = {
  getSpecies,
  getAnimals,
  createAnimal,
  deleteSpecies,
};
