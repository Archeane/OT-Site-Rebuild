const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');

//CONTROLLERS (ROUTE HANDLERS)
const homeController = require('./controllers/home');
const spotlightController = require('./controllers/spotlight');
const navbarController = require('./controllers/navbar');


const app = express();
app.set('port', process.env.PORT || 3000);
//Express configuration

//View Engine
app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//APP ROUTES
app.get('/', homeController.index);
app.get('/about', navbarController.getZetaEpsilon);
app.get('/about/greeklife', navbarController.getGreeklife);
app.get('/about/thetatau', navbarController.getThetaTau)
app.get('/events/brotherhood', navbarController.getBrotherhood);
app.get('/events/professional', navbarController.getProfessional);
app.get('/events/service', navbarController.getService);
app.get('/events/annual', navbarController.getAnnual);
app.get('/brothers', navbarController.getBrothers);
/**
 * Error Handler.
 */

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
}

module.exports = app;
