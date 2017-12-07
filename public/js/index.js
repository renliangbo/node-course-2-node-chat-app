var socket = io();
socket.on('connect', function () {
		console.log('connection to server')
});

socket.on('disconnect', function () {
		console.log('disconnection')
})

socket.emit('createMessage', {
		from: 'Andrew',
		text: 'hellow Andrew'
});

socket.on('newMessage', function (message) {
		console.log(message)
});
