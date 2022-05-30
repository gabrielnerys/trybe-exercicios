const express = require('express');
const { getAllAuthors, insertAuthor } = require('../models/Author');
const { getAllBooks, getById, getByAuthorId } = require('../models/Books');
const newAuthorValidate = require('../middlewares/validateNewAuthor');


const routes = express.Router();

routes.get('/authors', async (_req, res) => {
	try {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  } catch {
    res.status(404).json({ message: 'Erro' })
  }
});

routes.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name, birthday, nationality } = req.body;

  if (!newAuthorValidate(first_name, middle_name, last_name, birthday, nationality)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  insertAuthor(first_name, middle_name, last_name, birthday, nationality);

  return res.status(201).json({ message: 'Autor inserido com sucesso' })
});

routes.get('/books', async (_req, res) => {
	try {
    const books = await getAllBooks();
  
    res.status(200).json(books);
  } catch {
    res.status(404).json({ message: 'Erro' })
  }
});

routes.get('/books/:id', async (req, res) => {
	try {
    const { id } = req.params;

    const books = await getById(id);
  
    res.status(200).json(books);
  } catch {
    res.status(404).json({ message: 'Not found' })
  }
});

routes.get('/books/search', async (req, res) => {
	try {
    const { authorId } = req.query;
    const books = await getByAuthorId(authorId);

    res.status(200).json(books);
  } catch {
    res.status(404).json({ message: 'Not found' })
  }
});

module.exports = routes;