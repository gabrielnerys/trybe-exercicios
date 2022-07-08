import connection from "./models/connection";
import BookModel, { Book } from "./models/Books";
import readline from 'readline-sync';

const main = async () => {
  const bookModel = new BookModel(connection);

  const result = await bookModel.getAll();
  console.log(result)
} 

const createBook = async() => {
  const bookModel = new BookModel(connection);

  const title = readline.question('Digite o nome do livro: ');
  const price = readline.questionFloat('Digite o preço do livro: ');
  const author = readline.question('Digite o nome do autor do livro: ');
  const isbn = readline.question('Digite o isbn do livro: ');

  const newBook: Book = { title, price, author, isbn };

  const createdBook = await bookModel.create(newBook);
  console.log(createdBook)

}

main();
createBook();