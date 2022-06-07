const express = require('express');
const Users = require('../controllers/users');

const routes = express.Router();

routes.get('/users', Users.getAll);

routes.get('/users/:id', Users.findById);

routes.post('/users');

module.exports = routes;