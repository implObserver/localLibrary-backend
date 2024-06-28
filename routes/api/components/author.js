import { Router } from 'express';
import { authorController } from '../../../controllers/authorController.js';

export const authorApiRouter = Router();

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
authorApiRouter.get("/author/create", authorController.author_create_get);

// POST request for creating Author.
authorApiRouter.post("/author/create", authorController.author_create_post);

// GET request to delete Author.
authorApiRouter.get("/author/:id/delete", authorController.author_delete_get);

// POST request to delete Author.
authorApiRouter.post("/author/:id/delete", authorController.author_delete_post);

// GET request to update Author.
authorApiRouter.get("/author/:id/update", authorController.author_update_get);

// POST request to update Author.
authorApiRouter.post("/:id/update", authorController.author_update_post);

// GET request for one Author.
authorApiRouter.get("/author/:id", authorController.author_detail_api);

// GET request for list of all Authors.
authorApiRouter.get("/authors", authorController.author_list);