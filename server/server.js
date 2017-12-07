//binconsole.log(__dirname + '/../public')
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http')

var {generateMessage} = require('./utils/message');

publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();

var server = http.createServer(app);
var io = socketIO(server)
app.use(express.static(publicPath));
io.on('connection', (socket) => {
		console.log('new user connection');
		socket.on('disconnect', () => {
				console.log('user disconnect')
		});

		socket.emit('newMessage', generateMessage('Admin', 'Welcome to this chat room'));

		socket
				.broadcast
				.emit('newMessage', generateMessage('Admin', 'New user joined'));

		socket.on('createMessage', (message, callback) => {
				console.log(message);
				callback('This is from the server');
				io.emit('newMessage', generateMessage(message.from, message.text));

				// socket 		.broadcast 		.emit('newMessage', { 				text: message.text, 				from:
				// message.from, 				createdAt: new Date() 		})
		})
		socket.on('createEmail created', function (e) {
				console.log(e)
		})
})

server.listen(port, () => {
		console.log(`App start on port ${port}`)
})