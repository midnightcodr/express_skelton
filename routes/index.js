
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.test = function(req, res){
  res.render('test', { 
	title: 'Playground',
	jquery: true,
	jqueryui: true,
	mootools: true,
	blueprint: false
 });
};
