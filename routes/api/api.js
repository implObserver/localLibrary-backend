import { Router } from 'express';
import { bookRouter } from './components/book.js';
import { authorApiRouter } from './components/author.js';
import { bookinstanceRouter } from './components/bookinstance.js';
import { genreRouter } from './components/genre.js';
import { commonRouter } from './components/common.js';

export const apiRouter = Router();

apiRouter.use(
    "/api",
    commonRouter,
    bookRouter,
    authorApiRouter,
    bookinstanceRouter,
    genreRouter,
);