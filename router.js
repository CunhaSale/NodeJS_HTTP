var http = require('http');

var createRouter = function(port){
	var api = {};
	var routes = {};
	var methods = ['GET', 'POST'];
	var interceptors = [];

	methods.forEach(function(method){
		routes[method] = {};
		api[method.toLowerCase()] = function(path, fn){
			routes[method][path] = fn;
		};
	});

	api.interceptor = function(interceptor){
		interceptors.push(interceptor);
	};

	var executeInterceptors = function(number, req, res){
		var interceptor = interceptors[number];
		if(!interceptor) return;
		interceptor(req, res, function(){
			executeInterceptors(++number, req, res);
		});
	};

	http.createServer(function(req, res){
		executeInterceptors(0, req, res);
		if(!routes[req.method][req.url]) {
			res.statusCode = 404;
			return res.end();
		}
		routes[req.method][req.url](req, res);
	}).listen(port);

	return api;
};

module.exports = createRouter;