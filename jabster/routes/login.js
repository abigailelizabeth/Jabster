var express = require('express');
var router = express.Router();

var db

router.post('/login', (req, res) => {
	// find the user in the database
	// save the user as current user in session
	// redirect to index or eventually dash with active user set

	db = req.db;
	// var collection = db.get('users');
	var usr = db.collection('users').findOne({username: req.body.username});
	if (!usr.username) {
		console.log("User not found!");
	}
	console.log(usr);
    console.log(req.body);  
    console.log('saved to database');
    res.redirect('/');
});

router.post('/register', (req, res) =>{
	// ensure username is not duplicate
	// save user information to database
	// make new user current user in session
	// redirect to index or profile page with active user set
	console.log("you are trying to register");
	db = req.db;
	var usr = db.collection('users').find({username: req.body.username})

	console.log(usr);

	// if (req.body.username != usr.username){
	// 	console.log("User does not exist, creating new user");
	// 	db.collection('users').save(req.body, (err, result) => {
	// 		if(err) return console.log(err);

	// 		console.log(req.body.username + ' saved to database');
	// 		var string = encodeURIComponent('Hello, ' + req.body.username + '!');
	// 		res.redirect('/?greeting=' + string);
	// 	});
	// }
	// else {
	// 	console.log("User already exists!");
	// }
});

module.exports = router;
