import express, { Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { loadContainer } from './container';
import { loadControllers } from 'awilix-express';
import connectMongoDb from './configs/mongo';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
// config env vars
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
// load awilix (IOC) container
loadContainer(app);
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(loadControllers('controllers/*.ts', { cwd: __dirname }));
// catch 404 and forward to error handler
app.use(function (req, res) {
  res.render('error', {
    message: 'not found',
    error: { status: 404 },
    title: 'Page Not Found',
  });
});
// error handler
app.use(function (
  err: { message: string; status: number },
  req: Request,
  res: Response
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// start the app
app.listen(PORT, async () => {
  // connect mongodb
  connectMongoDb();
  console.log('app is running on port', PORT);
});

export default app;
