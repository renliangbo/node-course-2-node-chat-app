var socket = io();
socket.on('connect', function () {
		console.log('connection')
});

socket.on('disconnect', function () {
		console.log('disconnection')
})
socket.on('newEmail', function (e) {
		console.log(e)
		console.log('newEmail')
});

socket.emit('createEmail', {ren: 44})