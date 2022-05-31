const express = require('express');
const Authors = require('../controllers/Authors');
// const Books = require('../controllers/Authors');
// const { getAllBooks, getById, getByAuthorId } = require('../models/Books');
// const newAuthorValidate = require('../middlewares/validateNewAuthor');

const routes = express.Router();

routes.get('/authors', Authors.getAll);

routes.get('/authors/:id', Authors.findById);

routes.post('/authors', Authors.newAuthor);

// routes.get('/books', Books.getAll);

// routes.get('/books/:id', Books.findById);

// routes.get('/books/search', Books.findByAuthorId);

module.exports = routes;