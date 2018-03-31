var express = require("express");
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var gpio = require("onoff").Gpio;
var LED = new gpio(13,'out');
var LED2 = new gpio(4, 'out');

app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req,res,next){
	res.sendFile(__dirname + "/index.html");
});

server.listen(8000);

io.on('connection', function(client) {
	console.log('Client connected...');

	client.on('join', function(data) {
		client.emit('messages', 'Hello from server');
	});

	client.on('messages', function(data){
		LED.writeSync(parseInt(data));
		LED.writeSync(parseInt(data));
	});
});
