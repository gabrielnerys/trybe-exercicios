const express = require('express');

const app = express();

const Author = require('./models/Author');
const { getByAuthorId, getAll } = require('./models/Books')

app.get('/authors', async (_req, res) => {
	try {
    const authors = await Author.getAll();
    res.status(200).json(authors);
  } catch {
    res.status(404).json({ message: 'Erro' })
  }
});

app.get('/books', async (req, res) => {
	try {
    const books = await Book.getAll();
  
    res.status(200).json(books);
  } catch {
    res.status(404).json({ message: 'Erro' })
  }
});

app.get('/books/search', async (req, res) => {
	try {
    const { author_id } = req.query;

    const books = (author_id)
    ? await getByAuthorId(author_id)
    : await getAll();
  
    res.status(200).json(books);
  } catch {
    res.status(404).json({ message: 'Erro' })
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`)
});