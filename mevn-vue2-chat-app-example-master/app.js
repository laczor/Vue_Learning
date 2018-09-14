var express = require('express');            //To create a http server
var createError = require('http-errors');   //In order to create error object messages in the http request --> https://www.npmjs.com/package/http-errors
var path = require('path');                 //In order to easily read the root of the fileSystem where the website data is stored
var favicon = require('serve-favicon');     // It is a middleware to serve effectively the favicon for the browser  --> https://www.npmjs.com/package/serve-favicon
var logger = require('morgan');             // It is a middleware which will log all of the http request
var bodyParser = require('body-parser');    // It is a middleware to extract data from the http body

var room = require('./routes/room');        //Routes handling for rooms
var chat = require('./routes/chat');
var app = express();                        //Creating the express app

var mongoose = require('mongoose');         //In order to interact with the mongoDB
mongoose.Promise = require('bluebird');     // it is necessary to work with the mongoDB in a promise based way  --> http://bluebirdjs.com/docs/api/promisification.html

//Then you can connect to the db with passing the options object
mongoose.connect('mongodb://localhost:27017/mevn-chat', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));                                               //You have to tell express to use the logger in dev mode to log all of the http request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));                //Accepts only urlencoded parameters
app.use(express.static(path.join(__dirname, 'dist')));               //To tell express where the static files are stored for serving them
app.use('/rooms', express.static(path.join(__dirname, 'dist')));    //At rooms it will serve the static folder
app.use('/api/room', room);                                         //Routes handling for rooms
app.use('/api/chat', chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler --> will log a detailed error message if the enviorment variable of 'env' is set to developement

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

module.exports = app;
