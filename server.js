var express = require('express')
var ws = require('./ws')

var app = express()

app.get('/', function (req, res) {
	res.sendFile('index.html');
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});

ws.send();