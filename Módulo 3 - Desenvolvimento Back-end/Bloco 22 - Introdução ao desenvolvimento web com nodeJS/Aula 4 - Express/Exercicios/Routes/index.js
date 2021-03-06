const express = require('express');
const routes = express.Router();

routes.get('/ping', function(req, res) {
  res.status(200).json({ message: "pong" })
});

routes.post('/hello', function(req, res) {
  const { name } = req.body;
  res.status(200).json({ message: `Hello ${name}, how are you?` })
});

routes.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if(age < 17) return res.status(401).json({ "message": "Unauthorized" });
  res.status(200).json({ message: `Hello ${name}, how are you?` })
});

routes.put('/user/:name/:age', function(req, res) {
  const { name, age } = req.body;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

module.exports = routes;