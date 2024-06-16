import { Router } from 'express';
import { bookRouter } from './components/book.js';
import { authorRouter } from './components/author.js';
import { bookinstanceRouter } from './components/bookinstance.js';
import { genreRouter } from './components/genre.js';
import { commonRouter } from './components/common.js';

export const catalogRouter = Router();

catalogRouter.use(
    "/",
    commonRouter,
    bookRouter,
    authorRouter,
    bookinstanceRouter,
    genreRouter,
);