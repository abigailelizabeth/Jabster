var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var title = "Jabster";
	if(req.query.greeting){ title = req.query.greeting;}
  res.render('index.html', {
		title : title,
		items : [
		{ name : 'Test Item 1' },
		{ name : 'Test Item 2' },
		]
	});
});

/* GET login page. */
router.get('/login', function(req, res, next){
	res.render('login.html', {});
});

/* GET newBlog page. */
router.get('/newBlog', function(req,res, next){
	res.render('newBlog.html', {});
});

module.exports = router;
