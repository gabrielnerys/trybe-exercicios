const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
    return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
  };

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';

  const [authors] = await connection.execute(query, [id]);

  if (authors.lenght === 0) return res.status(404).json({ message: "Author not found" });

  return authors.map(serialize);
}

const insertNew = async (firstName, middleName, lastName, birthday, nationality) => {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name, birthday, nationality) VALUES (?, ?, ?, ?, ?)';
  
  const [author] = await connection.execute(query, [firstName, middleName, lastName, birthday, nationality]);

  return [getNewAuthor({ id: author.insertId, firstName, middleName, lastName, birthday, nationality })]
}

module.exports = { getAll, findById, insertNew };