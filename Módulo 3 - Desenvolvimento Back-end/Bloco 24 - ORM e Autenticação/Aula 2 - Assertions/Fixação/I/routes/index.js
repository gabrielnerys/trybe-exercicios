const express = require('express');
const Employees = require('../controllers/employees');

const routes = express.Router();

routes.get('/employees', Employees.getAll);

routes.get('/employees/:id', Employees.getById);

routes.post('/employees');

module.exports = routes;