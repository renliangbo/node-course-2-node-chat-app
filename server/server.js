//binconsole.log(__dirname + '/../public')
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http')
var publicPath = path.join(__dirname, '../public');

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

		socket.emit('newMessage', {
				from: 'Admin',
				text: 'Welcome to this chat room',
				createdAt: new Date()
		});

		socket
				.broadcast
				.emit('newMessage', {
						from: 'Admin',
						text: 'New user joined',
						createdAt: new Date()
				})

		socket.on('createMessage', (message) => {
				console.log(message);
				// io.emit('newMessage', { 		from: message.from, 		text: message.text,
				// 		createdAt: new Date().getTime() }) socket 		.broadcast
				// 		.emit('newMessage', { 				text: message.text, 				from: message.from,
				// 				createdAt: new Date() 		})
		})
		socket.on('createEmail created', function (e) {
				console.log(e)
		})
})

server.listen(port, () => {
		console.log(`App start on port ${port}`)
})