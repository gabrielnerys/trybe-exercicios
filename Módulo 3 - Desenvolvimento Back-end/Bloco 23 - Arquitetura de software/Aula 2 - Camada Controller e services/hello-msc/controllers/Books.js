const Books = require('../services/Books');

const getAll = async (_req, res) => {
  	try {
      const books = await getAllBooks();
    
      res.status(200).json(books);
    } catch {
      res.status(404).json({ message: 'Erro' })
    }
  };

const findById = async (req, res) => {
  	try {
      const { id } = req.params;
  
      const books = await getById(id);
    
      res.status(200).json(books);
    } catch {
      res.status(404).json({ message: 'Not found' })
    }
  };

  const findByAuthorId = async (req, res) => {
    	try {
        const { authorId } = req.query;
        const books = await getByAuthorId(authorId);
    
        res.status(200).json(books);
      } catch {
        res.status(404).json({ message: 'Not found' })
      }
    }

// const newBook =  async (req, res) => {
// 	const { first_name, middle_name, last_name, birthday, nationality } = req.body;

//   const author = await Author.newAuthor(first_name, middle_name, last_name, birthday, nationality);

//   if (!author) return res.status(400).json({ message: 'Dados inválidos' });

//   res.status(201).json(author);
// };

module.exports = { 
  getAll,
  findById,
  findByAuthorId,
  // newBook,
};
