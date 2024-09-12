const express = require("express");
const { checkRecipeId } = require("./recipe-middleware");
const Recipes = require("./recipe_model");

const router = express.Router();

router.get("/id", (req, res, next) => {
  const { id } = req.params;

  Recipes.getRecipeById(id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  });
});
module.exports = router;
