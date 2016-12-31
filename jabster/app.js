var express = require('express');

var nunjucks = require('nunjucks');

const MongoClient = require('mongodb').MongoClient;
var db;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var flash = require('express-flash');

var index = require('./routes/index');
var login = require('./routes/login');
<<<<<<< HEAD
=======
var newBlog = require('./routes/newBlog');
//var users = require('./routes/users');

>>>>>>> 7202d0430b758d05d5a114bc5ba7f44defb2fc8a
var app = express();

MongoClient.connect('mongodb://abbyeb22:abbyjabster@ds115798.mlab.com:15798/jabster', (err, database) => {
    if(err) return console.log(err);
    db = database;
    app.listen(3000, function(){
    console.log('listening on 3000');
    });
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
//app.use(flash());
app.use(express.static('public'));


// Make db accessible to router
app.use(function(req,res,next){
	req.db = db;
	next();
});

app.use('/', index);
app.use('/login', login);
app.use('/newBlog', newBlog);

module.exports = app;
