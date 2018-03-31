var express = require("express");
var app = express();

var gpio = require("onoff").Gpio;
var LED = new gpio(13,'out');
app.get('/', function(req,res){
	res.send("test");
});

app.listen(8000, function(){
	console.log("Light on...");
	LED.writeSync(0);
});
