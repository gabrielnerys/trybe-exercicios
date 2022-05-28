const express = require('express');
const recipes = require('../data/menu');
const authValidate = require('../middlewares/authValitade')

const routes = express.Router();

routes.get('/recipes', function (_req, res) {
  res.status(200).json(recipes);
});

routes.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

routes.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

routes.post('/recipes', authValidate, function (req, res) {
  const { id, name, price, waitTime } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, waitTime, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

routes.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

routes.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

module.exports = routes;