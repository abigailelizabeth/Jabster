var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
	// find the user in the database
	// save the user as current user in session
	// redirect to index or eventually dash with active user set
	
	
    console.log(req.body);  
    console.log('saved to database');
    res.redirect('/');
});

router.post('/register', (req, res) =>{
	console.log("you are trying to register");
});

module.exports = router;
