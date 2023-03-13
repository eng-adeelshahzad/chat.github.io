var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

const request = require('request');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(port, () => {
  console.log('Server listening at port : ', port);
});

io.on('connection', (socket) => {

	console.log('User Conencted');

  // When user send message
  socket.on('Chat Message', (_sender, _receiver, _message) => {
    io.emit('Chat Message', _sender, _receiver, _message);
  });

});