var express = require('express');
var app = express();
var path = require('path');

app.set('port', 3000);

// express will now automatically look in the public folder for files
// this means that we can (and will) get rid of the root route
app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', function(req, res) {
	console.log("Get the json");
	res
		.status(200)
		.json( {"jsonData" : true} );
});

app.get('/file', function(req, res) {
	console.log("Get the file");
	res
		.status(200)
		.sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port);	
});