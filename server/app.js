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

socketio(server);