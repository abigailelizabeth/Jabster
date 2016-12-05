var express = require('express');
var router = express.Router();

console.log("Ive reached index.js file");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', {
		title : 'Jabster!',
		items : [
		{ name : 'Test Item 1' },
		{ name : 'Test Item 2' },
		]
	});
});

router.get('/login', function(req, res, next){
	res.render('login.html', {});
});

module.exports = router;
