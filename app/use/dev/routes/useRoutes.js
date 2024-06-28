import { apiRouter } from '../../../../routes/api/api.js';
import { catalogRouter } from '../../../../routes/catalog/catalog.js';
import { indexRouter } from '../../../../routes/index.js';
import { wikiRouter } from '../../../../routes/wiki.js';
import { app } from '../../../app.js';

export const useRoutes = () => {
    app.use(indexRouter);
    app.use(wikiRouter);
    app.use(catalogRouter);
    app.use(apiRouter);
}