var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', {
		title : 'My first nunjucks page.',
		items : [
		{ name : 'item#1' },
		]
	});
});

module.exports = router;
