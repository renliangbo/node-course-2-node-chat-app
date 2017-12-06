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
		})
})

server.listen(port, () => {
		console.log(`App start on port ${port}`)
})