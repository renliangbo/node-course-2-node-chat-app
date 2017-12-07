var socket = io();
socket.on('connect', function () {
		console.log('connection to server')
});

socket.on('disconnect', function () {
		console.log('disconnection')
})

// socket.emit('createMessage', { 		from: 'Andrew', 		text: 'hellow Andrew' });

socket.on('newMessage', function (message) {
		console.log(message);
		var template = $('#message-template').html();
		console.log(template)
		var html = Mustache.render(template, message);
		$("#messages").append(html)
});

$("#message-form").on('submit', function (e) {
		e.preventDefault();
		socket.emit('createMessage', {
				from: 'User',
				text: $("[name='message']").val()
		}, function () {})
})
var locationButton = $("#send-location");
locationButton.on('click', function () {
		if (!navigator.geolocation) {
				alert('Geolocation is not suported by your bowser')
		};
		navigator
				.geolocation
				.getCurrentPosition(function (position) {
						console.log(position)
				}, function (err) {
						console.log(err)
						alert('Unable to fetch loaction')
				});
		console.log(navigator.geolocation)
});
