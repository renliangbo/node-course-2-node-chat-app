var socket = io();
socket.on('connect', function () {
		console.log('connection to server')
});

socket.on('disconnect', function () {
		console.log('disconnection')
})

socket.on('newMessage', function (message) {
		console.log(message)
});

socket.emit('createMessage', {
		from: 'Andrew',
		text: 'hellow Andrew'
})
