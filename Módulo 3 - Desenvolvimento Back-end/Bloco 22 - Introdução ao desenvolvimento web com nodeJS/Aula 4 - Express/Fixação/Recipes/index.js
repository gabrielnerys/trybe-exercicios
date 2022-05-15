const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  {id: 1, name: 'Lasanha', price: 40.0 , waitTime: 30},
  {id: 2, name: 'Macarrão a bolonhesa', price: 35.0, waitTime: 25},
  {id: 3, name: 'Macarrão ao molho branco', price: 30.0, waitTime: 25},
  {id: 4, name: 'Miojo e nugget', price: 12.0, waitTime: 20},
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function(req, res){
  res.json(recipes)
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime  } = req.body;
  if (!id || !name || !price || !waitTime) return res.status(404).json({ message: 'All fields are required!'});
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({id, name, price, waitTime});  
  res.status(201).json({ message: 'Recipe created sucessfully'});
})

app.get('/recipes/search', function(req, res){
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipe = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice) && r.price > parseInt(minPrice));

  if (!filteredRecipe) return res.status(404).json({message: 'Recipe not found'});

  res.status(200).json(filteredRecipe);
})

app.get('/recipes/:id', function(req, res){
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/drinks', function(req, res){
  res.json(drinks)
});

app.get('/drinks/search', function(req, res){
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));

  if (!filteredDrinks) return res.status(404).json({message: 'Drink not found'});

  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function(req, res){
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});


app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3001')
});

