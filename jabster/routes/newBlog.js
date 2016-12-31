var express = require('express')
var router = express.Router();

var db;

router.post('/newBlog', (req, res) => {
	db = req.db;
	console.log("trying to post: " +req.body.blogBody);
	db.collection('blogPosts').insert(
		{
			blogTitle: req.body.blogTitle,
		 	blogBody: req.body.blogBody
		 });
	console.log(req.body.blogBody + "added to database");
	res.redirect('/newBlog');
});

module.exports = router;
