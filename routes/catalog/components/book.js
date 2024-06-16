import { Router } from 'express';
import { bookController } from '../../../controllers/bookController.js';

export const bookRouter = Router();

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
bookRouter.get("/book/create", bookController.book_create_get);

// POST request for creating Book.
bookRouter.post("/book/create", bookController.book_create_post);

// GET request to delete Book.
bookRouter.get("/book/:id/delete", bookController.book_delete_get);

// POST request to delete Book.
bookRouter.post("/book/:id/delete", bookController.book_delete_post);

// GET request to update Book.
bookRouter.get("/book/:id/update", bookController.book_update_get);

// POST request to update Book.
bookRouter.post("/book/:id/update", bookController.book_update_post);

// GET request for one Book.
bookRouter.get("/book/:id", bookController.book_detail);

// GET request for list of all Book items.
bookRouter.get("/books", bookController.book_list);