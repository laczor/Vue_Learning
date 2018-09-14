var express = require('express');
var router = express.Router();                        //Using express routing object
// var mongoose = require('mongoose');
var app = express();
var server = require('http').createServer(app);       //Creating the http server
var io = require('socket.io')(server);                //Assigning socketIo to the server
var Chat = require('../models/Chat.js');              //Created mongoos models

// Socket IO
server.listen(4000);


//Will listen to the socekt events of connection

//1. on disconnect the server will log some data
// 2. on save-message the server will emit data, which will be listened by the browser
io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log(data);
    io.emit('new-message', { message: data });
  });
});

//Will simply interact with the Chat mongoose Model
/* GET ALL CHATS */
router.get('/:roomid', function(req, res, next) {
  Chat.find({ room: req.params.roomid }, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CHAT BY ID */
router.get('/:id', function(req, res, next) {
  Chat.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CHAT */
router.post('/', function(req, res, next) {
  Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CHAT */
router.put('/:id', function(req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE CHAT */
router.delete('/:id', function(req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
