import { Router } from 'express';
import { authorController } from '../../../controllers/authorController.js';

export const authorRouter = Router();

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
authorRouter.get("/author/create", authorController.author_create_get);

// POST request for creating Author.
authorRouter.post("/author/create", authorController.author_create_post);

// GET request to delete Author.
authorRouter.get("/author/:id/delete", authorController.author_delete_get);

// POST request to delete Author.
authorRouter.post("/author/:id/delete", authorController.author_delete_post);

// GET request to update Author.
authorRouter.get("/author/:id/update", authorController.author_update_get);

// POST request to update Author.
authorRouter.post("/:id/update", authorController.author_update_post);

// GET request for one Author.
authorRouter.get("/author/:id", authorController.author_detail_render);

// GET request for list of all Authors.
authorRouter.get("/authors", authorController.author_list);