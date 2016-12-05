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

router.post('/login', (req, res) => {
	// find the user in the database
	// save the user as current user in session
	// redirect to index or eventually dash with active user set
    console.log(req.body);  
    console.log('saved to database');
    res.redirect('/');
});




module.exports = router;
