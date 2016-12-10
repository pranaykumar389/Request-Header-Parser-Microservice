var express = require('express'),
    app = express(),
    requestIp = require(request-ip);

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.get('/api/findip', function(req, res) {
    var ip = req.ip;
         
});