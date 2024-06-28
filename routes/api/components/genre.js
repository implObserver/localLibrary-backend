import { Router } from 'express';
import { genreController } from '../../../controllers/genreController.js';

export const genreRouter = Router();

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
genreRouter.get("/genre/create", genreController.genre_create_get);

//POST request for creating Genre.
genreRouter.post("/genre/create", genreController.genre_create_post);

// GET request to delete Genre.
genreRouter.get("/genre/:id/delete", genreController.genre_delete_get);

// POST request to delete Genre.
genreRouter.post("/genre/:id/delete", genreController.genre_delete_post);

// GET request to update Genre.
genreRouter.get("/genre/:id/update", genreController.genre_update_get);

// POST request to update Genre.
genreRouter.post("/genre/:id/update", genreController.genre_update_post);

// GET request for one Genre.
genreRouter.get("/genre/:id", genreController.genre_detail);

// GET request for list of all Genre.
genreRouter.get("/genres", genreController.genre_list);