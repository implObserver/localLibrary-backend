import { Router } from 'express';
import { commonController } from '../../../controllers/commonController.js';

export const commonRouter = Router();

// GET catalog home page.
commonRouter.get("/", commonController.index);