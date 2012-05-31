
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.test = function(req, res){
  res.render('test', { 
	title: 'Let the fun start ...',
	underscore: true,
	jquery: true,
	jqueryui: false,
	mootools: false,
	backbone: false,
	bootstrap: false,
	blueprint: true
 });
};

exports.bootstrap = function(req, res){
  res.render('test', { 
	title: 'Bootstrap in action',
	underscore: true,
	jquery: true,
	jqueryui: false,
	mootools: false,
	backbone: false,
	bootstrap: true,
	blueprint: false
 });
};
