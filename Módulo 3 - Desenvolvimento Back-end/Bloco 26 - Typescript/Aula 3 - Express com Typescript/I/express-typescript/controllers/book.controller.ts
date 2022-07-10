import { Request, Response } from "express";
import BookService from "../services/book.service";
import { StatusCodes } from "http-status-codes";

class BooksController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    if (!books) return res.status(StatusCodes.NOT_FOUND).json({ message: "deu ruim" });
    res.status(StatusCodes.OK).json(books);
  }

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const books = await this.bookService.getById(id);
    if (!books) return res.status(StatusCodes.NOT_FOUND).json({ message: "deu ruim" });
    res.status(StatusCodes.OK).json(books);
  }

  public create = async (req: Request, res: Response) => {
    const book = req.body;

    const bookCreated = await this.bookService.create(book);
    res.status(StatusCodes.CREATED).json(bookCreated);
  }
}

export default BooksController;