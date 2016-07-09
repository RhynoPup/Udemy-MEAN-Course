var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

// using middleware to log all requests that come to the application
app.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

// express will now automatically look in the public folder for files
// this means that we can (and will) get rid of the root route
app.use(express.static(path.join(__dirname, 'public')));

// setting the extended option to false forces the form body to only use strings and arrays
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/api', routes);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Magic happens on port ' + port);	
});