var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var sessionstore = require('sessionstore');
var store = sessionstore.createSessionStore();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
require('./mongo');

var auth = require('./route/auth.js');
var loauth = require('./route/login.js');
var InputStr = require('./route/string.js');
app.use('/reg', auth);
app.use('/login', loauth);
app.use('/string', InputStr);
app.listen(3000, function(){
  console.log('Server porting on 3000');

});
module.exports = app;
