const express = require('express');
const { validacaracter, validaInfo, validaSaleDate } = require('../middlewares');
const routes = express.Router();

routes.post('/sales', validacaracter, validaInfo, validaSaleDate, function (req, res) {
  const { productName, info } = req.body;
  //recipes.push({ productName, info });
  res.status(201).json({ message: 'Venda cadastrada com sucesso!'});
});

routes.get('/hello', function(req, res) {
  res.json({ message: 'Tudo ok'});
})

module.exports = routes;