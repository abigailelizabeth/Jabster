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
		//req.flash('errorMessage', "Sorry no user found");
		res.redirect('/login');
	}
	else{
		console.log(usr);
	    console.log(req.body);  
	    console.log('saved to database');
	    res.redirect('/');
	}
	
});

router.post('/register', (req, res) =>{
	// ensure username is not duplicate
	// save user information to database
	// make new user current user in session
	// redirect to index or profile page with active user set

	var name = req.body.name;
	var userName = req.body.username;
	var password = req.body.password;
	console.log("you are trying to register");

	var db = req.db;
	var collection = db.collection('users');
	collection.insert({
		"name": name,
		"username": userName,
		"password": password
	}, (err, doc) =>{
		if (err) {
			res.send("there was an error adding the information to the database.");
		}
		else {
			var string = encodeURIComponent('Hello, ' + userName);
			res.redirect('/?greeting=' + string);
		}
	});


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
