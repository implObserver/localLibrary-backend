import { join } from 'path';
import { app } from '../../app.js';
import { __dirname } from '../../dirname/dirname.js';

// view engine setup
export const setViewEngine = () => {
    console.log(__dirname)
    app.set('views', join(__dirname, 'views'));
    app.set('view engine', 'pug');
}