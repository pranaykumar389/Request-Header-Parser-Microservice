'use strict';
var express = require('express'),
    Router = express.Router(),
    findIP = require('./route-list');

Router.get('/', findIP.list)
    .get('/api/findyourip', findIP.get);

module.exports = Router;