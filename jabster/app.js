console.log("HELLO");

var express = require('express');

var nunjucks = require('nunjucks')

var path = require('path');
console.log("this is ath: " + path)
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

app.listen(3000, function() {
	console.log('listening on 3000')
});

nunjucks.configure('views', {
	autoescape: true,
	express   : app
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
//app.use('/users', users);

module.exports = app;
