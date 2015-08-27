'use strict';

var express 		= require('express');
var socketio		= require('socket.io');

var app 				= express();


app.use(express.static('client'));


var server = app.listen(3000, function () {
	console.log('Server listening on port 3000');
});

// We have to pass in socket.io into the server. 
//So we just set it to server, then pass it in 

var io = socketio(server);

io.on('connection', function (socket) {
  console.log('Client connected:', socket.id);

// On disconnect

  socket.on('disconnect', function () {
    console.log('Client disconnected:', socket.id);
  });

// Message Display

  socket.on('chatMessage', function (msg) {
  	console.log('Chat Message received:', msg);

 	// Sending message to one, everyone but one, and everyone 

  // socket.emit('chatMessage', {toOne: msg});
  
  // socket.broadcast.emit('chatMessage', {toOthers: msg});	
  
  io.emit('chatMessage', msg);
});

});