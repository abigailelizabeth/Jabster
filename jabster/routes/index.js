var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var title = "Jabster";
	if(req.query.greeting){ title = req.query.greeting;}
  res.render('index.html', {
		title : title,
		items : [
		{ name : '' },
		{ name : 'Test Item 2' },
		]
	});
});

router.get('/login', function(req, res, next){
	res.render('login.html', {});
});

module.exports = router;
