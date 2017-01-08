var express = require('express'),
    app = express();

//Port Setup
var port = process.env.PORT || 8080;

//Route
var Router = require('./routes/route.js');
app.use('/', Router);

//Views
app.use('/', express.static('views'));

app.listen(port, function() {
    console.log('Server Listening on port '+ port +'!');
});