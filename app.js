import { fileURLToPath } from 'url';
import { dirname } from 'path';
import createError from 'http-errors';
import express, { json, urlencoded, static as staticFile } from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import usersRouter from './routes/users.js';
import wikiRouter from './routes/wiki.js';
import { catalogRouter } from './routes/catalog/catalog.js';
import { connectLibraryDB } from './database/dispatcherdb.js';
import compression from 'compression';
import helmet from 'helmet'
import RateLimit from 'express-rate-limit'
import { indexRouter } from './routes/index.js';

connectLibraryDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 200,
});

app.use(limiter);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);

app.use(compression());
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(staticFile(join(__dirname, 'public')));

app.use(indexRouter);
app.use('/users', usersRouter);
app.use("/wiki", wikiRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
