"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class BookModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM books';
            const result = yield this.connection.execute(query);
            const [rows] = result;
            return rows;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM books WHERE id = ?';
            const result = yield this.connection.execute(query, [id]);
            const [rows] = result;
            const [book] = rows;
            return book;
        });
    }
    create(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, price, author, isbn } = book;
            const query = 'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)';
            const result = yield this.connection.execute(query, [title, price, author, isbn]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, book);
        });
    }
}
exports.default = BookModel;
