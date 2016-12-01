var express = require('express');
var router = express.Router();

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

module.exports = router;
