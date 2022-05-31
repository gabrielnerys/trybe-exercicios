const Author = require('../services/Authors');

const getAll = async (_req, res) => {
	try {
    const authors = await Author.getAuthors();
    res.status(200).json(authors);
  } catch {
    res.status(404).json({ message: 'Erro' })
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  const author = await Author.authorById(id);
  if (!author) return res.status(404).json({ message: 'Author not found' });
  res.status(200).json(author);
};

const newAuthor =  async (req, res) => {
	const { first_name, middle_name, last_name, birthday, nationality } = req.body;

  const author = await Author.insertNew(first_name, middle_name, last_name, birthday, nationality);

  if (!author) return res.status(400).json({ message: 'Dados inválidos' });

  res.status(201).json(author);
};

module.exports = { getAll, findById, newAuthor }
