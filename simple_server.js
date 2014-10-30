// Include the http module
var fruitVendor = require('./fruitvendclass.js');
var http = require('http');
var url = require('url');
var fs = require('fs');
// Create an http server, and supply a callback for when requests arrive
http.createServer(function (request, response) {
	var urldic = url.parse(request.url);

	function setIsFound (endurl, callback) {
		console.log(endurl);
		// include the filesystem module
		var urldic1 = endurl;
		endurl = endurl.path;
		var filename = endurl.substr(1);
		var ind = filename.lastIndexOf("?");
		var isFound = "change me!"
		if (ind != -1) {
			filename = filename.substr(0,ind);
			console.log(filename);
			if (filename == "fruitVendor1"){
				isFound = "found";
				console.log("Hit");
				callback(urldic1.path, isFound);
			}
		}
		if (!filename) {
		   	isFound = "not found";
		   	callback(endurl,isFound);
		}
		var rs = fs.createReadStream(filename);
		rs.setEncoding('utf8');
	
		rs.on('error', function(e) {
		   	isFound = "not found";
		   	callback(endurl,isFound);
		});
		rs.on('data', function(data) {
		});
		rs.on('end', function() {
		  	isFound = "found";
		  	console.log(isFound);
		  	callback(endurl,isFound);
		});

	};
  
	function process(endurl, isFound) {
		console.log("YO!");
		var check = endurl.lastIndexOf("?");
		console.log(check);
		if (check == -1) {
	  		if (isFound == "found") {
	  			var extNm = getExtension(endurl);
	  			if (extNm == "js"){
	  		  		response.writeHead(200, {'Content-Type': 'application/javascript'});
	  		  		getData(endurl);
	  		  	}
	  		  	else if (extNm == "html"){
	  		  		response.writeHead(200, {'Content-Type': 'text/html'});
	  		  		getData(endurl);
	  		  	}
	  		  	else if (extNm == "css"){
	  		  		response.writeHead(200, {'Content-Type': 'text/css'});
	  		  		getData(endurl);
	  		  	}
	  		}
	  		else {
	   			response.writeHead(404, {'Content-Type': 'html'});
	   			response.end("<b>NOT FOUND</b>");
	   		}
	   	}
	  	if (check != -1) {
	    	response.writeHead(200, {'Content-Type': 'text/html'});
	    	var ind1 = endurl.lastIndexOf("=");
	    	console.log(ind1+1);
	    	var allret = endurl.substr(ind1+1);
	    	console.log(endurl);
	    	console.log("YO");
	    	var fv = new fruitVendor();
	    	allret = { giveback: fv.addBanana(allret)};
	    	console.log(allret);
	    	response.end(JSON.stringify(allret));
	    }
	    return;
	};
	
	function getExtension (endurl){
		var extension = endurl.split('.');
		var extensionNm = extension[1]
		return extensionNm;
	};
	
	function getData(endurl) {
		var filename = endurl.substr(1);
		var rs = fs.createReadStream(filename);
		rs.setEncoding('utf8'); 
		rs.on('data', function(data) {
		  response.write(data);
		});
		rs.on('end', function(){
			response.end();
		});
	};

	setIsFound(urldic, process);
  }).listen(50000) // Use a non-registered port to have this process listen to
console.log('Server running on localhost:50000');


