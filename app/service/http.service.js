function http($http,$q,config){
	this.get = function(url,opt){
		var def = $q.defer();
		$http({
			method:"get",
			url:config.baseUrl + url,
			params:opt
		}).then(function(result){
			def.resolve(result);
		})
		return def.promise;
	};
	this.post = function(url,opt){
		var def = $q.defer();
		$http({
			method:"post",
			url:config.baseUrl + url,
			headers:{'Content-Type': 'application/x-www-form-urlencoded'},  
		   	transformRequest: function(obj) {  
		     	var str = [];  
		     	for(var p in obj){  
		       		str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
		     	}  
		     	return str.join("&");  
		   	},
			data:opt
		}).then(function(result){
			def.resolve(result);
		})
		return def.promise;
	}
}

module.exports = http;

// http://blog.csdn.net/fengzijinliang/article/details/51897991