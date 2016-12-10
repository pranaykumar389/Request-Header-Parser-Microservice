var express = require('express'),
    app = express(),
    requestIp = require('request-ip');

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

//
app.get('/api/findip', function(req, res) {
    // req.ip
    var ip = requestIp.getClientIp(req),
        lang = req.headers['accept-language'].split(',')[0],
        software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    
    res.json({
        "ipaddress": ip,
        "language": lang,
        "software": software
    });
});

app.listen(8080, function() {
    console.log('Server Listening on port 8080!');
});