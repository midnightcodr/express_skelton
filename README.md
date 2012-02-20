### About
A simple node.js+express+jade skelton to build web applications quickly. The following items can be turned on of off by modifying the keys in routes/index.js (example provided)

* blueprint
* jquery (1.7.1, using google cdn)
* jquery-ui (1.8.17, using google cdn)
* mootools(1.4.3, using google cdn)



### Instruction
	git clone --depth 1 git://github.com/midnightcodr/express_skelton.git
	rm -rf express_skelton/.git
	mv express_skelton your_new_project_name	
Last two commands are needed because most likely you would start a new project based on this skelton.

### Usage Example
	// routes/index.js
	exports.test = function(req, res){
	  res.render('test', { 
		title: 'Playground',
		jquery: true,
		jqueryui: true,
		mootools: true,
		blueprint: false
	 });
	};
