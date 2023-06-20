// req.query() Demo Example
// Importing the express module
var express = require('express');

// Initializing the express and port number
var app = express();
var PORT = 9000;

// Getting the request query string
app.get('/greet', function(req, res){
   console.log('name: ' + req.query.name)
   res.send('Hello, ' + req.query.name +"!");
});

// Listening to the port
app.listen(PORT, function(err){
   if (err) console.log(err);
   console.log("Server listening on PORT", PORT);
});