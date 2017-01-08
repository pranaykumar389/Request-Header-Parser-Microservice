'use strict';
var express = require('express'),
    requestIp = require('request-ip');

var findIP = {
    
    //Home Page
    list: function(req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    },
    
    //Api Page
    get:  function(req, res) {
        var ip = requestIp.getClientIp(req),
        lang = req.headers['accept-language'].split(',')[0],
        software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    
        res.json({
            "ipaddress": ip,
            "language": lang,
            "software": software
        });
    }

};

module.exports = findIP;