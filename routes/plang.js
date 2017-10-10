var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('plang/index.pug', { title: 'PLang Documentation' });
});

router.get('/:page', function(req, res, next) {
	if(!fs.existsSync('./views/plang/' + req.params.page + '.pug')){
		res.render('plang/invalidreq.pug', { title: 'PLang Documentation' });
		return;
	}

	res.render('plang/' + req.params.page + '.pug', { title: 'PLang Documentation' });
});

module.exports = router;
