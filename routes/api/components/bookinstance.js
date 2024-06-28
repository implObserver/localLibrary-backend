import { Router } from 'express';
import { bookinstanceController } from '../../../controllers/bookInstanceController.js';

export const bookinstanceRouter = Router();

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
bookinstanceRouter.get(
    "/bookinstance/create",
    bookinstanceController.bookinstance_create_get,
);

// POST request for creating BookInstance.
bookinstanceRouter.post(
    "/bookinstance/create",
    bookinstanceController.bookinstance_create_post,
);

// GET request to delete BookInstance.
bookinstanceRouter.get(
    "/bookinstance/:id/delete",
    bookinstanceController.bookinstance_delete_get,
);

// POST request to delete BookInstance.
bookinstanceRouter.post(
    "/bookinstance/:id/delete",
    bookinstanceController.bookinstance_delete_post,
);

// GET request to update BookInstance.
bookinstanceRouter.get(
    "/bookinstance/:id/update",
    bookinstanceController.bookinstance_update_get,
);

// POST request to update BookInstance.
bookinstanceRouter.post(
    "/bookinstance/:id/update",
    bookinstanceController.bookinstance_update_post,
);

// GET request for one BookInstance.
bookinstanceRouter.get("/bookinstance/:id", bookinstanceController.bookinstance_detail);

// GET request for list of all BookInstance.
bookinstanceRouter.get("/bookinstances", bookinstanceController.bookinstance_list);