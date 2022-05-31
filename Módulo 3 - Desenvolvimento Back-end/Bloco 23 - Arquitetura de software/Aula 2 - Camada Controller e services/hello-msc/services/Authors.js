const Author = require('../models/Author')

const getNewAuthor = (authorData) => {
  const {id, firstName, middleName, lastName } = authorData;

  const fullname = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

  return { id, firstName, middleName, lastName, name: fullname };
}

const isValid = (firstName, middleName, lastName, birthday, nationality) => {
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  if (!firstName || typeof firstName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!dateRegex.test(birthday)) return false;
  if (!nationality || typeof nationality !== "string") return false;

  return true;
}

const getAll = async () => {
  const authors = await Author.getAll()

  return authors.map(getNewAuthor);
}

const findById = async (id) => {
  const author = await Author.findById(id);

  return getNewAuthor(author);
}

const insertNew = async (firstName, middleName, lastName, birthday, nationality) => {
  const validInsert = isValid(firstName, middleName, lastName, birthday, nationality);

  if (!validInsert) return false;

  const [author] = await Author.insertNew(firstName, middleName, lastName, birthday, nationality);

  return getNewAuthor({
    id: author.id,
    firstName,
    middleName,
    lastName,
  });
}

module.exports = { getAll, findById, insertNew };