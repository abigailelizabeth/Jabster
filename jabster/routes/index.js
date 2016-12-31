var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var title = "Jabster";
	var currentUsers = req.db.collection('users').find().toArray((err, result) =>{
		var temp = [1, 2, 3, 4]
		console.log("Printing our temp array: " + temp);
		console.log(result);
	});
	if(req.query.greeting){ title = req.query.greeting;}
  res.render('index.html', {
		title : title,
		items : [
<<<<<<< HEAD
		{ name : 'Test Item 1' },
		{ name : 'Test Item 2' }
		], 
=======
		{ name : '' },
		{ name : 'Test Item 2' },
		]
>>>>>>> d2d3b3b2b9f84b2f73b0e9ef72a104d63ef5d1a2
	});
});

/* GET login page. */
router.get('/login', function(req, res, next){
	res.render('login.html');
});

<<<<<<< HEAD
module.exports = router;
=======
/* GET newBlog page. */
router.get('/newBlog', function(req,res, next){
	res.render('newBlog.html', {});
});

/* GET newBlog page. */
router.get('/newBlog', function(req,res, next){
	res.render('newBlog.html', {});
});

module.exports = router;
>>>>>>> 7202d0430b758d05d5a114bc5ba7f44defb2fc8a
