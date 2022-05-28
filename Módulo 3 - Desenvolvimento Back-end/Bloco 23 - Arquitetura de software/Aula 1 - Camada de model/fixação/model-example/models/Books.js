const connection = require('./connection');

const getByAuthorId = async (author_id) => {
  const query = 'SELECT * FROM model_examples.books WHERE author_id=?;';
  
  const [books] = await connection.execute(query, [author_id]);

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    author_id,
  }));
}

const getAll = async() => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;',
  )
  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = { getAll, getByAuthorId };