'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js');

var app = express();
routes(app);
app.listen(3000,()=>{
	console.log('Listen on port 3000.......')
})
