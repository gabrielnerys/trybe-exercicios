const connection = require('./connection');

const getById = async (id) => {

  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return res.status(404);

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getByAuthorId = async (author_id) => {

  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'

  const [books] = await connection.execute(query, [author_id]);

  if (books.length === 0) return res.status(404);

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getAllBooks = async() => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  )
  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = { getAllBooks, getById, getByAuthorId };